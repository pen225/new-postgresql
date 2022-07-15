require('dotenv').config()
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("postgres://ljoggwullmsxxs:51f1d03fe914d530b853fac9a0780276e3a6a8e1912caebdc5e380267eed45c9@ec2-3-219-52-220.compute-1.amazonaws.com:5432/d621k26bqnaiv7"
    /* {
    database : process.env.DB_DATABASE, 
    username :process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD, 
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: 5432,
    ssl:true,
    dialectOptions: {
        ssl: {
            require:true,
        }
    }
} */
);

module.exports = sequelize;