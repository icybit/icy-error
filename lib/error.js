module.exports = function CustomError(name) {
    function CustomErrorType(message, data) {
        var self = this;

        if (!(self instanceof CustomErrorType)) {
            return new CustomErrorType(message, data);
        }

        Error.captureStackTrace(self, self.constructor);

        self.name = name || 'UnexpectedError';
        self.message = message || 'An unexpected error has occurred';
        self.data = data || {};
    }

    CustomErrorType.prototype = Object.create(Error.prototype);
    CustomErrorType.prototype.constructor = CustomErrorType;
    
    return CustomErrorType;
};