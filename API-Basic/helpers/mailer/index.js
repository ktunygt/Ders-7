const service = require("./service");
const { email } = require("../../constants/config");

const sendEmail = async (toEmail, heading, content) => {
    try {
        const mailOptions = {
            from: email.username,
            to: toEmail,
            subject: heading,
            text: content
        }

        await service.sendMail(mailOptions);

        return {
            status: true,
            message: `Mail gönderildi: "${toEmail}".`
        }
    }
    catch (error) {
        console.error(error);
        return {
            status: false,
            message: `Mail gönderilemedi: "${toEmail}".`
        }
    }
};

module.exports = sendEmail;
