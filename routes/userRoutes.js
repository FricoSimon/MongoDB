const express = require('express');
const userRouter = express.Router();
const { userRegister, userLogin, userGetById, userDelete, userUpdate, userUploadImage } = require('../controllers/userControls');
const isLogin = require('../utils/isLogin');
const multer = require('multer');
const storage = require('../config/cloudinary');

const multerStorage = multer({ storage });

// user routes
userRouter.post('/register', userRegister);

userRouter.post('/login', userLogin);

userRouter.get('/profile', isLogin, userGetById);

userRouter.delete('/profile', isLogin, userDelete);

userRouter.put('/profile', isLogin, userUpdate);

userRouter.post('/upload-img', multerStorage.single('image'), userUploadImage);

module.exports = userRouter;