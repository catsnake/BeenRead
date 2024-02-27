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
module.exports = router;
