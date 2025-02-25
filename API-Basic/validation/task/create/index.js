const Joi = require("joi");

const validate = (data) => {
    const schema = new Joi.object({
        header: Joi.string().required(),
        content: Joi.string()
    });

    return schema.validate(data);
};

module.exports = validate;
