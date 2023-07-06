const express = require('express');
const userRouter = express.Router();
const { userRegister, userLogin, userGetById, userDelete, userUpdate } = require('../controllers/userControls');
const isLogin = require('../utils/isLogin');

// user routes
userRouter.post('/register', userRegister);

userRouter.post('/login', userLogin);

userRouter.get('/profile/:id', isLogin, userGetById);

userRouter.delete('/profile/:id', isLogin, userDelete);

userRouter.put('/profile/:id', isLogin, userUpdate);

module.exports = userRouter;