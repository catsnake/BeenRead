const express = require('express');
const socialController = require('../controllers/socialController');

const router = express.Router();

router.post('/followUser', socialController.followUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.get(
  '/getFollowedUsers',
  socialController.getFollowedUsers,
  (req, res) => {
    res.status(200).json(res.locals.followedUsers);
  }
);

router.put('/unfollowUser', socialController.unfollowUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.get('/getFollowers', socialController.getFollowers, (req, res) => {
  res.status(200).json(res.locals.followers);
});

module.exports = router;
