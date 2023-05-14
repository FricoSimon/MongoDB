const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Firstname is required!']
    },
    lastName: {
        type: String,
        required: [true, 'Lastname is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['Member', 'Admin', 'Editor'],
    },
    viewedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    followers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User