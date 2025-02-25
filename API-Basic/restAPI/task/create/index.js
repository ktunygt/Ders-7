const Task = require("../../../models/task");
const createValidate = require("../../../validation/task/create");

const taskCreate = async (req, res) => {
    const data = req.body;
    const user = req.user;
    const validate = createValidate(data);

    if (validate.error) {
        return res.status(400).send({
            message: validate.error.details[0].message
        });
    }

    const task = await Task.create({
        userID: user.id,
        header: data.header,
        content: data.content,
        isCompleted: false,
        isActive: true
    });

    if (!task) {
        return res.status(500).send({
            message: "Bilinmeyen bir hata."
        });
    }

    return res.status(200).send({
        task: task,
        message: "Kayıt başarılı."
    });
};

module.exports = taskCreate;
