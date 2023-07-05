// user register
const userRegister = async (req, res) => {
    try {
        res.json({
            status: 'success',
            statusCode: 200,
            message: 'User registered successfully!'
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