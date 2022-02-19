class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.StatusCode = statusCode

        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = ErrorHandler