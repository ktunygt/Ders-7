require("dotenv").config();

const config = {
    environment: process.env.NODE_ENV || "development",

    token: {
        JWT_KEY: "XNlrtWLq8TC4Gf4LMHGHcszql6sIwU78",
    },

    email: {
        service: process.env.EMAIL_SERVICE,
        username: "devtest.mer@gmail.com",
        password: ""
    }
};

module.exports = config;
