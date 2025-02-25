const Joi = require("joi");

const validate = (data) => {
    const schema = new Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });

    return schema.validate(data);
};

module.exports = validate;
