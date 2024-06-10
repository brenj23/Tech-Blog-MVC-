const router = require('express').Router();
const userRoutes = require('../controllers/userController');
const homeRoutes = require('../controllers/homeController');
const postRoutes = require('../controllers/postController');
const commentRoutes = require('../controllers/commentController');



router.use('/api/users', userRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/comments', commentRoutes);
router.use('/', homeRoutes);

module.exports = router;
