const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Create a new post
router.post('/', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({
      title,
      content,
      author,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: 'Unable to create post' });
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ error: 'Unable to fetch posts' });
  }
});

module.exports = router;
