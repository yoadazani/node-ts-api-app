abstract class CustomError extends Error {
    abstract statusCode: number;

    abstract statusType: string;

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): { message: string; field?: string }[];
}
