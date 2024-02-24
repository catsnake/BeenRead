const User = require('../models/userModel');

const userController = {}


userController.signup = async (req, res, next) => {
try {
    const{username, email, password} = req.body;

    const newUser = await new User({username, email, password}).save();

    if(newUser){
        res.locals.newUser = newUser;
        return next();
    }else{
        res.status(500).json('Cannot create new user!')
    }
} catch (error) {
    return next({
        log: 'Error in userController.signin',
        message: {error: 'cannot create a new user'}
    })
}
    
}

userController.signin = async (req, res,  next) => {
    try {
      
        const {email, password} = req.body;

        const user = await User.findOne({email}).exec();

       

        if(user && await user.comparePassword(password)){
            res.locals.user = user;
            return next();
        }else{
            res.status(404).json('Invalid email or password')
        }
    } catch (error) {
        return next({
            log: 'Error in userController.signin: ',
            message: {error: 'cannot sign in'}
    })
}
}

module.exports = userController;