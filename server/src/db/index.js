const Sequelize = require('sequelize');
const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
} = require('../conf')

class Database {
    constructor () {
        this.connection = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
            host: MYSQL_HOST,
            dialect: 'mysql',
        })
    }

    checkConnection(){
        return this.connection.autheticate()
    }
}

module.exports = Database