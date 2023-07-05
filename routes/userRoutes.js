const express = require('express');
const userRouter = express.Router();
const { userRegister, userLogin, userGetById, userDelete, userUpdate } = require('../controllers/userControls');

// user routes
userRouter.post('/register', userRegister);

userRouter.post('/login', userLogin);

userRouter.get('/profile/:id', userGetById);

userRouter.delete('/profile/:id', userDelete);

userRouter.put('/profile/:id', userUpdate);

module.exports = userRouter;