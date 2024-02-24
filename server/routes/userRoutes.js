const express = require('express');
const userController = require('../controllers/userController');


router = express.Router();

router.post('/signup', userController.signup, (req, res) => {
     res.status(200).json({
        _id : res.locals.newUser._id,
        username: res.locals.newUser.username,
        email: res.locals.newUser.email
     })

})



router.post('/signin', userController.signin , (req, res) => {
    res.status(200).json({
        _id : res.locals.newUser._id,
        username: res.locals.newUser.username,
        email: res.locals.newUser.email
     })

})


module.exports = router