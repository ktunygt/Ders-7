const { environment } = require("../constants/config");

module.exports = testEndpointAccess = (req, res, next) => {
    if (environment !== "development") {
        return res.status(401).send({
            message: "Erişilemez işlem!"
        });
    }

    next();
};
