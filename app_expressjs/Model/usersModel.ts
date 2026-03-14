import db from "../db";
import sequelize from "sequelize";

export default db.define("user", {
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    password: {
        type: sequelize.STRING(255),
        allowNull: false
    }

})