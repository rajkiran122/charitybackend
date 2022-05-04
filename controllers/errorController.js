const AppError = require('../utils/appError');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

    console.log(err.message);

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        stack: err.stack,
        error: err,
    });
}