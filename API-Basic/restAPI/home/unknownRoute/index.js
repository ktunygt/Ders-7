const unknownRoute = (req, res) => {
    return res.status(404).send({
        message: "Aradığınız sayfa mevcut değil!"
    });
};

module.exports = unknownRoute;
