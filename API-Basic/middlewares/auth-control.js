const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { token: tokenConfig } = require("../constants/config");

module.exports = authControl = async (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token || token.length === 0) {
        return res.status(401).send({
            message: "Token gönderilmedi!"
        });
    }

    let tokenVerify;
    try {
        tokenVerify = jwt.verify(token, tokenConfig.JWT_KEY);
    }
    catch (error) {
        let message;

        if (error.name === "TokenExpiredError") {
            message = "Token süresi dolmuş!";
        }
        else {
            message = "Oturum doğrulanmadı!";
        }

        return res.status(400).send({
            message: message
        });
    }

    const user = await User.findOne({
        where: {
            email: tokenVerify.email
        },
        raw: true
    });

    req.user = user;

    next();
};
