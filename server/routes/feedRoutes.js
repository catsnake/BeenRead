const express = require('express');
const feedController = require('../controllers/feedController');

const router = express.Router();

router.get(
  '/getFeed:user',
  feedController.getFollowedUsersFeedData,
  (req, res) => {
    res.status(200).json(res.locals.followedUsersData);
  }
);

router.post('/postReaction', feedController.postReaction, (req, res) => {
  res.status(200).json(res.locals.updatedUser);
});

module.exports = router;
