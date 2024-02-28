const User = require('../models/userModel');

const readController = {};

readController.readDailyArticle = async (req, res, next) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username });

    if (!user) {
      return next({
        log: 'Error in readController.readDailyArticle: ',
        message: { error: 'User not found' },
      });
    }

    const userId = user._id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { 'feed.readDailyArticle': true } },
      { new: true }
    );

    res.locals.user = updatedUser;

    return next();
  } catch (error) {
    return next({
      log: 'Error in readController.readDailyArticle: ',
      message: { error: 'Cannot read daily article' },
    });
  }
};

readController.updateTimeFinished = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      return next({
        log: 'Error in readController.updateTimeStarted: ',
        message: { error: 'User not found' },
      });
    }

    const userId = user._id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { 'feed.timeFinishedReading': Date.now() } },
      { new: true }
    );

    res.locals.user = updatedUser;

    return next();
  } catch (error) {
    return next({
      log: 'Error in readController.updateTimeStarted: ',
      message: { error: 'Cannot update time started' },
    });
  }
};

readController.updateTimeSpent = async (req, res, next) => {
  try {
    const { username, timeSpent } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return next({
        log: 'Error in readController.updateTimeSpent: ',
        message: { error: 'User not found' },
      });
    }

    const userId = user._id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { 'feed.timeSpentReading': timeSpent } },
      { new: true }
    );

    res.locals.user = updatedUser;

    return next();
  } catch (error) {
    return next({
      log: 'Error in readController.updateTimeSpent: ',
      message: { error: 'Cannot update time spent' },
    });
  }
};

readController.updateDailyStreak = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      return next({
        log: 'Error in readController.updateDailyStreak: ',
        message: { error: 'User not found' },
      });
    }

    const userId = user._id;
    const newStreak = user.feed.dailyStreak + 1;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { 'feed.dailyStreak': newStreak } },
      { new: true }
    );

    res.locals.user = updatedUser;

    return next();
  } catch (error) {
    return next({
      log: 'Error in readController.updateDailyStreak: ',
      message: { error: 'Cannot update daily streak' },
    });
  }
};

readController.dailyReset = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      return next({
        log: 'Error in readController.dailyReset: ',
        message: { error: 'No users found' },
      });
    }

    for (const user of users) {
      let userId = user._id;
      const readDailyArticle = user.feed.readDailyArticle;

      if (!readDailyArticle) {
        await User.findByIdAndUpdate(userId, {
          $set: { 'feed.dailyStreak': 0 },
        });
      }

      let updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            'feed.readDailyArticle': false,
            'feed.timeFinishedReading': null,
            'feed.timeSpentReading': 0,
            'feed.dailyReactions': [],
          },
        },
        { new: true }
      );

      res.locals.users[userId] = updatedUser;
    }

    return next();
  } catch (error) {
    return next({
      log: 'Error in readController.dailyReset: ',
      message: { error: 'Cannot reset daily streak' },
    });
  }
};

module.exports = readController;
