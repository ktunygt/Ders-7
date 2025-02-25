module.exports = validateLogCode = (code, level, levels) => {
    code = !code ? 0 : code;

    if (levels[level] !== undefined) {
        code = (code % 100) + (levels[level] * 100);
    }

    return {
        code: code,
        level: level
    };
};