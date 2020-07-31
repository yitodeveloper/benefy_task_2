const Database = require('..');
const Sequelize = require('sequelize');

const db = new Database();

class User extends Sequelize.Model{}
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { sequelize: db.connection, modelName: 'user', freezeTableName: true, timestamps: false })

module.exports = User;