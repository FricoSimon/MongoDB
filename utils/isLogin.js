const getJWT = require('../utils/getToken');

// isLogin functions
const isLogin = async (req, res, next) => {
    const token = await getJWT(req);

    if (!token) {
        res.json({
            status: 'error',
            statusCode: 400,
            message: 'Token not found!'
        });
    } else {
        next();
    }
}

module.exports = isLogin;