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

// import middlewares
const errorHandler = require('./middlewares/globalError');

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/comment', commentRouter);
app.use('/api/category', categoryRouter);

// global error handler
app.use(errorHandler);

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'Failed',
        statusCode: 404,
        url: req.originalUrl,
        message: 'Page not found!'
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
