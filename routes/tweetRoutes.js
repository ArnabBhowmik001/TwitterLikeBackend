// routes/tweetRoutes.js

const express = require('express');
const router = express.Router();
const { postTweet, getUserTimeline } = require('../controllers/Tweetcontroller');

router.post('/', postTweet);
router.get('/timeline', getUserTimeline);

module.exports = router;
