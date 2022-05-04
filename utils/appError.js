class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.isOperational = true;

        Error.captureStackTrace(this, this.contructor);
    }
}

module.exports = AppError;