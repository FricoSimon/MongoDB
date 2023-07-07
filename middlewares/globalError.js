const errorHandler = (err, req, res, next) => {
    const status = err.status ? err.status : 'Failed';
    const message = err.message;
    const statusCode = err?.statusCode ? err.statusCode : 500;
    const stack = err.stack;

    res.status(statusCode).json({
        status,
        message,
        statusCode,
        stack,
    })
}

module.exports = errorHandler;