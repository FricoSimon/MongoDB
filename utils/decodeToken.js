const jwt = require('jsonwebtoken');

// decode & verify token
const verifyToken = async (token) => {
    return await jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
        if (err) {
            return false;
        } else {
            return decoded;
        }
    });
}

module.exports = verifyToken;