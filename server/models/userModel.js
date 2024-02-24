const mongoose = require('mongoose');
const {Schema} = mongoose



const userSchema = new Schema ({
    username: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required : true,
        unique: true
    },

    password : {
        type: String,
        required : true,
        
        
    },
    articlesRead : {
        type: Array,
        required: true,
    
    },
    amtOfArticles : {
        type: Number,
        required: true,
        default: 0
    }


})


const User = mongoose.model('User', userSchema)
module.exports = User