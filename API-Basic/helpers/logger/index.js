const { transports, createLogger, format, error, transport } = require("winston");
const { combine, prettyPrint, timestamp, printf } = format;
const { environment } = require("../../constants/config");
const Log = require("../../models/log");
const validate = require("../../validation/logger/logCode");

const consleLog = (code, level, message) => {
    environment === "development"
        ? (level === "error" || level === "critical")
            ? console.error(message)
            : level === "warn"
                ? console.warn(message)
                : console.log(message)
        : level === "error" || level === "critical"
            ? console.error(`[${code}]: ${message}`)
            :  level === "warn"
                ? console.warn(`[${code}]: ${message}`)
                : console.log(`[${code}]: ${message}`)
    return;
};

const databaseLog = async (code, level, message) => {
    environment === "development"
        ? await Log.create({
            code: code,
            level: level,
            message: message
        })
        : (level === "error" || level === "critical")
            && await Log.create({
                code: code,
                level: level,
                message: message
            });
};

const customFormat = printf(({ level, message, timestamp, code }) => {
    ({ code, level } = validate(code, level, logger.levels));
    consleLog(code, level, message);
    const logText = `{\n\tcode: "${code}",\n\tlevel: "${level}",\n\tmessage: "${message}",\n\ttimestamp: "${timestamp}"\n},`;
    return logText;
});

const logger = createLogger({
    levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
        critical: 4
    },
    format: combine(
        timestamp({ format: "MMM-DD-YYY HH:mm:ss" }),
        prettyPrint(),
        customFormat
    ),
    transports: [
        new transports.File({ filename: "logs.log", level: 3 })
    ]
});

logger.on("data", async (logData) => {
    let { code, level, message } = logData;
    ({ code, level } = validate(code, level, logger.levels));
    await databaseLog(code, level, message).catch(err => console.error("Failed to log to database:", err));
});

module.exports = logger;
