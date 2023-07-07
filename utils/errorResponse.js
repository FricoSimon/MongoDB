const errorResponse = (message, statuscode) => {
    const error = new Error(message);
    error.statusCode = statuscode ? statuscode : 500;
    error.stack = error.stack;
    return error;
}

module.exports = errorResponse;