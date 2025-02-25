const Sequelize = require("sequelize");

const sequelize = new Sequelize("userdb", "SA", "reallyStrongPwd123", {
    host: "localhost",
    dialect: "mssql",
    define: {
        timestamps: false
    },
    logging: false,
    storage: "./session/mssql"
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("Veri tabanı bağlantısı kuruldu.");
    }
    catch (error) {
        console.error(error);
    }
};

(async () => {
    await connect();
})();

module.exports = sequelize;
