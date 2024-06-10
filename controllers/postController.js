const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// Route to create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    console.log('Request body:', req.body);

    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    console.log('New post created:', newPost);

    res.status(200).json(newPost);
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err });
  }
});

module.exports = router;
