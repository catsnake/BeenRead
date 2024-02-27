const User = require('../models/userModel');

const socialController = {};

socialController.followUser = async (req, res, next) => {
  try {
    const { userId, friendId } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { followedUsers: friendId } },
      { new: true }
    ).then((user) => {
      res.locals.user = user;
    });

    const friend = await User.findByIdAndUpdate(
      friendId,
      { $push: { followers: userId } },
      { new: true }
    ).then((friend) => {
      res.locals.friend = friend;
    });

    return next();
  } catch (error) {
    return next({
      log: 'Error in userController.followUser: ',
      message: { error: 'cannot follow user' },
    });
  }
};

socialController.getFollowedUsers = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId)
      .populate('followedUsers')
      .then((user) => {
        res.locals.followedUsers = user.followedUsers;
        return next();
      });
  } catch (error) {
    return next({
      log: 'Error in userController.getfollowedUsers: ',
      message: { error: 'cannot get followedUsers' },
    });
  }
};

socialController.unfollowUser = async (req, res, next) => {
  try {
    const { userId, friendId } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { followedUsers: friendId } },
      { new: true }
    ).then((user) => {
      res.locals.user = user;
      return next();
    });
  } catch (error) {
    return next({
      log: 'Error in userController.unfollowUser: ',
      message: { error: 'cannot unfollow user' },
    });
  }
};

socialController.getFollowers = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId)
      .populate('followers')
      .then((user) => {
        res.locals.followers = user.followers;
        return next();
      });
  } catch (error) {
    return next({
      log: 'Error in userController.getFollowers: ',
      message: { error: 'cannot get followers' },
    });
  }
};

module.exports = socialController;
