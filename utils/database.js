const Sequelize = require('sequelize')
require('dotenv').config()

const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME
const dbUsername = process.env.DB_USER_NAME
const dbUserPass = process.DB_USER_PASS

const sequelize = new Sequelize(dbName, dbUsername, dbUserPass, {
    host: dbHost,
    dialect: 'postgres',
    logging: console.log
})

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDB()