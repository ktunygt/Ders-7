const User = require("../../../models/user");
const registerValidate = require("../../../validation/auth/register");

const register = async (req, res) => {
    const data = req.body;
    const validate = registerValidate(data);

    if (validate.error) {
        return res.status(400).send({
            message: validate.error.details[0].message
        });
    }

    const _user = await User.findOne({
        where: {
            email: data.email
        },
        raw: true
    });

    if (_user) {
        return res.status(409).send({
            message: "Böyle bir kullanıcı mevcut!"
        });
    };

    const user = await User.create({
        name: data.name,
        email: data.email,
        password: data.password
    });

    return res.status(200).send({
        message: "Kayıt başarılı."
    });
    
    // Kullanıcı kayıt olduktan sonra web uygulaması tarafından login sayfasına yönlendirilecek.
};

module.exports = register;
