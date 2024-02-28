import { CustomError } from './CustomError';

class AuthError extends CustomError {
    statusCode = 404;

    statusType = 'Authentication Error';

    constructor(
        message: string,
        private property?: string,
    ) {
        super(message);

        Object.setPrototypeOf(this, AuthError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message, property: this.property }];
    }
}

export { AuthError };
