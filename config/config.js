require('dotenv').config()
module.exports = {
    database : process.env.DB_DATABASE,
    username : process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: 5432,
    ssl:true,
    dialectOptions: {
        ssl: {
            require:true,
            rejectUnauthorized: false
        }
    }
  
}
  