const router = require('express').Router();
const commentController = require('../controllers/commentController');

router.use('/', commentController);

module.exports = router;
