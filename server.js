const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const routes = require('./routes');
const helpers = require('./utils/helpers');
require('dotenv').config(); // Ensure dotenv is configured

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Session configuration
app.use(session({
  store: new SequelizeStore({ db: sequelize }),
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 }
}));

// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
