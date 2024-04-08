// controllers/tweetController.js

const Tweet = require('../models/Tweet');

exports.postTweet = async (req, res) => {
  // console.log(req);
  console.log(req.userData)
  try {
    const { text } = req.body;
    const userId=req.userData.userId;
    const newTweet = new Tweet({ userId, text, createdAt: new Date() });
    await newTweet.save();
    res.status(201).json({ message: 'Tweet posted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getUserTimeline = async (req, res) => {
  try {
    const userId = req.userData.userId;
    const tweets = await Tweet.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
