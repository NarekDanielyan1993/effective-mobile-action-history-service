import { COMMON_ERROR_MESSAGES } from '@lib/error';

// eslint-disable-next-line no-unused-vars
function errorMiddleware(err, req, res, next) {
    const statusCode = err.httpCode || 500;
    console.log('Unexpected error:', err.stack);
    if (err.isOperational) {
        return res.status(statusCode).json(err);
    }

    res.status(500).json({
        message: COMMON_ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
    });
}

export default errorMiddleware;
