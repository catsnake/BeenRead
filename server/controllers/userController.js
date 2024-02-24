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
    return next('Error in userController.signup: ' + error.message)
}
    
}

userController.signin = async (req, res,  next) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email}).exec()

        if(user && await User.comparePassword(password)){
            res.locals.user = user;
            return next();
        }else{
            res.status(404).json('Invalid email or password')
        }
    } catch (error) {
        console.log('is this hitting')
        return next('Error in userController.signin: ' + error.message)
    }
}

module.exports = userController;