const router = require('express').Router();
const postController = require('../controllers/postController');

router.use('/', postController);

module.exports = router;
