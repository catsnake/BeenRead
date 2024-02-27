const User = require('../models/userModel');

const userController = {};

userController.signup = async (req, res, next) => {
  try {
    //these info from client
    const { username, email, password } = req.body;
    const newUser = await new User({ username, email, password }).save();

    if (newUser) {
      res.locals.newUser = newUser;
      return next();
    } else {
      res.status(403).json('Cannot create new user!');
    }
  } catch (error) {
    return next({
      log: 'Error in userController.signup',
      message: { error: 'cannot create a new user' },
    });
  }
};

userController.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).exec();

    if (user && (await user.comparePassword(password))) {
      res.locals.user = user;
      return next();
    } else {
      res.status(404).json('Invalid email or password');
    }
  } catch (error) {
    return next({
      log: 'Error in userController.signin: ',
      message: { error: 'cannot sign in' },
    });
  }
};

userController.followUser = async (req, res, next) => {
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

userController.getFollowedUsers = async (req, res, next) => {
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

userController.unfollowUser = async (req, res, next) => {
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

userController.getFollowers = async (req, res, next) => {
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
module.exports = userController;
