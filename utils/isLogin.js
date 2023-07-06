const getJWT = require('../utils/getToken');
const verifyToken = require('../utils/decodeToken');

// isLogin functions
const isLogin = async (req, res, next) => {
    // get token
    const token = await getJWT(req);

    // verify token
    const verify = await verifyToken(token);

    if (!verify) {
        return res.json({
            status: 'error',
            statusCode: 400,
            message: 'Token is invalid!'
        });
    } else {
        next();
    }
}

module.exports = isLogin;