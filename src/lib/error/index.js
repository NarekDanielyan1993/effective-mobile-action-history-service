export const HttpStatusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
    NOT_AUTHORIZED: 401,
    FORBIDDEN: 403,
};

export const COMMON_ERROR_MESSAGES = {
    INTERNAL_SERVER_ERROR: 'internal server error',
    FORBIDDEN: 'Forbidden',
    UNAUTHORIZED: 'Unauthorized',
    NOT_FOUND: 'Not found',
    VALIDATION: 'Validation Error',
};

export class AppError extends Error {
    constructor(httpCode, message, isOperational, name) {
        super(name);
        this.message = message;
        this.httpCode = httpCode;
        this.isOperational = isOperational;

        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}
export class InternalServerError extends AppError {
    constructor(
        message = COMMON_ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
        httpCode = HttpStatusCode.INTERNAL_SERVER,
        isOperational = true,
        name = 'InternalServerError',
    ) {
        super(httpCode, message, isOperational, name);
    }
}

export class NotFound extends AppError {
    constructor(
        message = COMMON_ERROR_MESSAGES.NOT_FOUND,
        httpCode = HttpStatusCode.NOT_FOUND,
        isOperational = true,
        name = 'NotFound',
    ) {
        super(httpCode, message, isOperational, name);
    }
}
