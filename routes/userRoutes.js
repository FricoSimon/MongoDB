const express = require('express');
const userRouter = express.Router();
const { userRegister, userLogin, userGetById, userDelete, userUpdate } = require('../controllers/userControls');
const isLogin = require('../utils/isLogin');

// user routes
userRouter.post('/register', userRegister);

userRouter.post('/login', userLogin);

userRouter.get('/profile', isLogin, userGetById);

userRouter.delete('/profile', isLogin, userDelete);

userRouter.put('/profile', isLogin, userUpdate);

module.exports = userRouter;