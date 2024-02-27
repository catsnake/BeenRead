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

userController.addFriend = async (req, res, next) => {
  try {
    const { userId, friendId } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { friends: friendId } },
      { new: true }
    ).then((user) => {
      res.locals.user = user;
      return next();
    });
  } catch (error) {
    return next({
      log: 'Error in userController.addFriend: ',
      message: { error: 'cannot add friend' },
    });
  }
};

userController.getFriends = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId)
      .populate('friends')
      .then((user) => {
        res.locals.friends = user.friends;
        return next();
      });
  } catch (error) {
    return next({
      log: 'Error in userController.getFriends: ',
      message: { error: 'cannot get friends' },
    });
  }
};

userController.removeFriend = async (req, res, next) => {
  try {
    const { userId, friendId } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } },
      { new: true }
    ).then((user) => {
      res.locals.user = user;
      return next();
    });
  } catch (error) {
    return next({
      log: 'Error in userController.removeFriend: ',
      message: { error: 'cannot remove friend' },
    });
  }
};

module.exports = userController;
