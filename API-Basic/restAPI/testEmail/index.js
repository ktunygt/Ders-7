const sendEmail = require("../../helpers/mailer");

const testEmail = async (req, res) => {
    const toEmail = "f211229013@ktun.edu.tr";
    const heading = "Bu bir test mailidir.";
    const content = "Test maili";

    const result = await sendEmail(toEmail, heading, content);

    return res.status(200).send({
        result: result
    });
};

module.exports = testEmail;
