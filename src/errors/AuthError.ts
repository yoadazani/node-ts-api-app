import { CustomError } from './CustomError';

class AuthError extends CustomError {
    statusCode = 404;

    statusType = 'Authentication Error';

    constructor(
        message: string,
        private property?: string,
        statusType?: string,
    ) {
        super(message);
        this.statusType = statusType ?? this.statusType;

        Object.setPrototypeOf(this, AuthError.prototype);
    }

    serializeErrors() {
        return [
            {
                statusType: this.statusType,
                statusCode: this.statusCode,
                error: this.message,
                property: this.property,
            },
        ];
    }
}

export { AuthError };
