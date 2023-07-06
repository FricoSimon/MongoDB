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

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
