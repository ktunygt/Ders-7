require("express-async-errors");

const errorCatch = (err, req, res, next) => {
    if (err.message && err.message.length > 0) {
        console.log(err.message);
    }

    return res.status(500).send({
        message: "Bilinmeyen bir hata oluştu."
    });
};

module.exports = errorCatch;
