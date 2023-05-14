const express = require('express');
const app = express();
require('dotenv').config();
require('./config/connect');
const port = process.env.PORT || 3000;

// user routes
app.post('/api/user/register', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'User registered successfully!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.post('/api/user/login', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'User login successfully!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.get('/api/user/profile/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Profile fetched successfully!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.delete('/api/user/profile/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Account deleted!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.put('/api/user/profile/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Update successfully!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

// post routes
app.post('/api/post', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Post created!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.get('/api/post/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Post fetch successfully!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.delete('/api/post/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Post deleted!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.put('/api/post/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Post Updated!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

// comment routes
app.post('/api/comment', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Comment added!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.delete('/api/comment/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Comment deleted!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.put('/api/comment/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Comment Updated!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

// categories routes
app.post('/api/category', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Category created!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.get('/api/category/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Category fetch successfully!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.delete('/api/category/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Category deleted!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.put('/api/category/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Category Updated!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
