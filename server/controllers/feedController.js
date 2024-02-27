const User = require('../models/userModel');

const feedController = {};

feedController.getFollowedUsersFeedData = async (req, res, next) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username }).populate({
      path: 'followedUsers',
      select:
        'readDailyArticle timeStartedReading timeFinishedReading timeSpentReading dailyStreak dailyReactions',
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if there are followed users to process
    if (user.followedUsers.length === 0) {
      res.locals.followedUsersData = [];
      return next();
    }

    const followedUsersData = user.followedUsers.map((followedUser) => ({
      readDailyArticle: followedUser.readDailyArticle,
      timeStartedReading: followedUser.timeStartedReading,
      timeFinishedReading: followedUser.timeFinishedReading,
      timeSpentReading: followedUser.timeSpentReading,
      dailyStreak: followedUser.dailyStreak,
      dailyReactions: followedUser.dailyReactions,
    }));

    res.locals.followedUsersData = followedUsersData;
    return next();
  } catch (error) {
    return next({
      log: 'Error in feedController.getFollowedUsersFeedData: ' + error,
      message: { error: 'Cannot get followed users feed data' },
    });
  }
};
module.exports = feedController;
