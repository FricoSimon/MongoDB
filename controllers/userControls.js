const User = require("../model/User/user");

// user functions
const userRegister = async (req, res) => {
    req.body = { firstName, lastName, username, email, password } = req.body;

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

        const user = await User.create({ firstName, lastName, username, email, password })
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
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'User login successfully!'
        });
    } catch (error) {
        res.json({ error: error.message });
    }
}

const userGetById = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'Profile fetched successfully!'
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