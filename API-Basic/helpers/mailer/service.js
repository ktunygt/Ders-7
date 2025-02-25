const nodemailer = require("nodemailer");
const { email } = require("../../constants/config");

const service = nodemailer.createTransport({
    service: email.service,
    auth:{
        user: email.username,
        pass: email.password
    }
});

module.exports = service;
