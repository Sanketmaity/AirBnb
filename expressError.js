class expressError extends Error {
    constructor(statusCode, message) {
        super.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = expressError;