const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required!']
    },
    views: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required!']
    },
    photo: {
        type: String,
        required: [true, 'Photo is required!']
    },
},
    {
        timestamps: true
    })
const Post = mongoose.model('Post', postSchema)
module.exports = Post