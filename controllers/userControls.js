const User = require("../model/User/user");
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
const getJWT = require('../utils/getToken');
const { decode } = require("jsonwebtoken");
const errorResponse = require('../utils/errorResponse');

// user functions
const userRegister = async (req, res, next) => {
    const { firstName, lastName, username, email, password } = req.body;

    try {
        if (!email || !password) {
            return next(errorResponse('Please provide an email and password!', 400));
        }

        const userCheck = await User.findOne({ email })
        if (userCheck) {
            return next(errorResponse('Email already exist!', 400));
        }
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create user
        const user = await User.create({ firstName, lastName, username, email, password: hashedPassword })
        res.json({
            status: 'success',
            statusCode: 200,
            message: user
        });
    } catch (error) {
        next(errorResponse(error.message, 400))
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // check if email is exist
        const userCheck = await User.findOne({ email })
        if (!userCheck) {
            return res.json({
                status: 'error',
                statusCode: 400,
                message: 'Email or Password is incorrect!'
            });
        }

        // check if password is correct
        const passCheck = await bcrypt.compare(password, userCheck.password);
        if (!passCheck) {
            return res.json({
                status: 'error',
                statusCode: 400,
                message: 'Email or Password is incorrect!'
            });
        }

        // login success
        res.json({
            status: 'success',
            statusCode: 200,
            message: {
                firstName: userCheck.firstName,
                lastName: userCheck.lastName,
                email: userCheck.email,
                isAdmin: userCheck.isAdmin,
                token: generateToken(userCheck._id) // generate JWT 
            }
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const userGetById = async (req, res) => {
    const userId = req.userId;

    try {
        // check if token is exist and valid
        const userFind = await User.findById(userId);
        const token = getJWT(req);

        if (!userFind) {
            return next(errorResponse('User not found!', 404));
        }
        res.json({
            status: 'success',
            statusCode: 200,
            message: userId
        });
    } catch (error) {
        next(errorResponse(error.message, 400))
    }
}

const userDelete = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Account deleted!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const userUpdate = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Update successfully!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = { userRegister, userLogin, userGetById, userDelete, userUpdate };  