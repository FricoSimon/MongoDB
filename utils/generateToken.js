const jwt = require('jsonwebtoken');

// generate token from user id and secret key
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_TOKEN, { expiresIn: '30d' })
}

module.exports = generateToken;