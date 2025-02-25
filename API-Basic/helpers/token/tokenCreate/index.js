const User = require("../../../models/user");
const jwt = require("jsonwebtoken");
const { token } = require("../../../constants/config");

const tokenCreate = async (userID, email) => {
    if (!userID || !email) {
        return {
            status: false,
            token: null
        };
    }

    const payload = {
        email: email
    }

    const newToken = jwt.sign(payload, token.JWT_KEY);

    if (!newToken) {
        return {
            status: false,
            token: null
        }
    }

    const _user = await User.findOne({
        where: {
            id: userID
        }
    });

    _user.token = newToken;
    await _user.save();

    return {
        status: true,
        token: newToken
    }
};

module.exports = tokenCreate;
