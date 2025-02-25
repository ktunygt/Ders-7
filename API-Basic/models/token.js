const { sequelize } = require("../data/db");
const { DataTypes } = require("sequelize");

const Token = sequelize.define("tokens", {
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
    token: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: false
});

(async () => {
    await Token.sync();
})();

module.exports = Token;
