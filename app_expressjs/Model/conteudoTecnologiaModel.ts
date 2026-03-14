import db from "../db"
import sequelize from "sequelize"

export default db.define("conteudo_tecnologia", {

    id: {
        type: sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    titulo: {
        type: sequelize.STRING(255),
        allowNull: false
    },

    conteudo: {
        type: sequelize.TEXT,
        allowNull: false
    },

    autor: {
        type: sequelize.STRING(255),
        allowNull: false
    }

})