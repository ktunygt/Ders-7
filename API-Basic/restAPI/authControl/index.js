const authControl = async (req, res) => {
    const user = req.user;

    return res.status(200).send({
        user: user,
        message: "Kullanıcı bilgileri iletildi."
    });
};

module.exports = authControl;
