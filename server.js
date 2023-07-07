const express = require('express');
const app = express();
require('dotenv').config();
require('./config/connect');
const port = process.env.PORT || 3000;

// import routes
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');
const categoryRouter = require('./routes/categoryRoutes');

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/comment', commentRouter);
app.use('/api/category', categoryRouter);

app.use((err, req, res, next) => {
    const status = err.status ? err.status : 'Failed';
    const statusCode = err?.statusCode ? err.statusCode : 500;
    const stack = err.stack;
    const message = err.message;

    res.status(statusCode).json({
        status,
        statusCode,
        stack,
        message
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
