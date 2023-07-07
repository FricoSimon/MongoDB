const errorHandler = (err, req, res, next) => {
    const status = err.status ? err.status : 'Failed';
    const statusCode = err?.statusCode ? err.statusCode : 500;
    const stack = err.stack;
    const message = err.message;

    res.status(statusCode).json({
        status,
        statusCode,
        stack,
        message
    })
}

module.exports = errorHandler;