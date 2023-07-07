const getJWT = require('../utils/getToken');
const verifyToken = require('../utils/decodeToken');
const errorResponse = require('../utils/errorResponse');

// isLogin functions
const isLogin = async (req, res, next) => {

    try {
        // get token
        const token = await getJWT(req);
        console.log(`Token: ${token}`);

        // verify token
        const verify = await verifyToken(token);

        // set userId from jwt
        req.userId = verify.id;
        console.log(`userId: ${req.userId}`);

        if (!verify) {
            return next(errorResponse('Please login first!', 400));
        } else {
            next();
        }
    } catch (error) {
        next(errorResponse(error.message, 400))
    }
}

module.exports = isLogin;