const sequelize = require("../data/db");
const { DataTypes } = require("sequelize");

const Blog = sequelize.define("blogs", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    userID: { // Bloğun kime ait olduğunun bilgisi tutulacak.
        type: DataTypes.STRING,
        allowNull: false
    },
    header: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, { timestamps: true });

(async () => {
    await Blog.sync();
})();

module.exports = Blog;
