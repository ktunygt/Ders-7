const sequelize = require("../data/db");
const { DataTypes } = require("sequelize");

const Log = sequelize.define("logs", {
    code: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    level: {
        type: DataTypes.STRING,
        allowNull: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: true
    },
    timestamps: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, { timestamps: false });

(async () => {
    await Log.sync();
})();

module.exports = Log;
