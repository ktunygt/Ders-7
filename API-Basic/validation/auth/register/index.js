const Joi = require("joi");

const validate = (data) => {
    const schema = new Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    });

    return schema.validate(data);
};

module.exports = validate;
