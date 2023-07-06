const getJWT = (req) => {
    const headerObject = req.headers;
    const token = headerObject["authorization"].split(' ')[1];

    if (token !== undefined) {
        return token;
    } else {
        return ({
            status: 'error',
            statusCode: 400,
            message: 'Token not found!'
        });
    }
}

module.exports = getJWT;