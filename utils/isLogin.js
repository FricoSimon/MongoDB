const getJWT = require('../utils/getToken');
const verifyToken = require('../utils/decodeToken');

// isLogin functions
const isLogin = async (req, res, next) => {

    try {
        // get token
        const token = await getJWT(req);

        // verify token
        const verify = await verifyToken(token);
        req.userId = verify.id;

        if (!verify) {
            return res.json({
                status: 'error',
                statusCode: 400,
                message: 'Token is invalid!'
            });
        } else {
            next();
        }
    } catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = isLogin;