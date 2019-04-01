import winston = require('winston');

const logger: winston.Logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'winston.log'
        })
        // TODO: Wire up Retrace (or other APM service)
    ]
});

process.on('uncaughtException', (err: Error) => {
    logger.log({ level: 'error', message: `Uncaught Exception: ${err.message} | ${err.stack}` });
});

export default logger;
