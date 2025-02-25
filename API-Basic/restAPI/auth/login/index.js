const User = require("../../../models/user");
const tokenCreate = require("../../../helpers/token/tokenCreate");
const loginValidate = require("../../../validation/auth/login");

const login = async (req, res) => {
    const data = req.body;
    const validate = loginValidate(data);

    if (validate.error) {
        return res.status(400).send({
            isAuth: false,
            message: validate.error.details[0].message
        });
    }

    const _user = await User.findOne({
        where: {
            email: data.email
        }
    });

    if (_user.password.toString() === data.password.toString()) {

        const tokenResult = await tokenCreate(_user.id, _user.email);

        if (!tokenResult.status || !tokenResult.token) {
            return res.status(500).send({
                isAuth: false,
                token: "",
                message: "Bilinmeyen bir hata oluştu."
            });
        }

        return res.status(200).send({
            isAuth: true,
            token: tokenResult.token,
            message: "Giriş başarılı."
        });
    }
    else {
        return res.status(400).send({
            isAuth: false,
            token: "",
            message: "Şifreniz hatalı."
        });
    }
};

module.exports = login;
