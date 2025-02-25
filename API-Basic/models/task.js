const sequelize = require("../data/db");
const { DataTypes } = require("sequelize");

const Task = sequelize.define("tasks", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    userID: {
        type: DataTypes.UUID,
        allowNull: false
    },
    header: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, { timestamps: true });

(async () => {
    await Task.sync();
})();

module.exports = Task;
