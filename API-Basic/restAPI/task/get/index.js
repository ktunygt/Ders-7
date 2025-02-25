const Task = require("../../../models/task");

const getTasks = async (req, res) => {
    const user = req.user;
    
    const tasks = await Task.findAll({
        where: {
            userID: user.id
        },
        raw: true
    });

    return res.status(200).send({
        tasks
    });
};

module.exports = getTasks;
