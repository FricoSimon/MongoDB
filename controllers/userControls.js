const User = require("../model/User/user");
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// user functions
const userRegister = async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;

    try {
        if (!email || !password) {
            return res.json({
                status: 'error',
                statusCode: 400,
                message: 'Email and Password are required!'
            });
        }

        const userCheck = await User.findOne({ email })
        if (userCheck) {
            return res.json({
                status: 'error',
                statusCode: 400,
                message: 'Email already exists!'
            });
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
        res.json({ error: error.message });
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
    const { id } = req.params;

    try {
        const userId = await User.findById(id);

        if (!userId) {
            return res.json({
                status: 'error',
                statusCode: 400,
                message: 'User not found!'
            });
        }
        res.json({
            status: 'success',
            statusCode: 200,
            message: userId
        });
    } catch (error) {
        res.json({ error: error.message });
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