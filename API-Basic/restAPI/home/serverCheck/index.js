const serverCheck = (req, res) => {
    return res.status(200).send({
        message: "API çalışmakta."
    });
};

module.exports = serverCheck;
