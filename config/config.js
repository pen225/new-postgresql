const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
module.exports = {
  development: {
      username: "ljoggwullmsxxs",
      password: "51f1d03fe914d530b853fac9a0780276e3a6a8e1912caebdc5e380267eed45c9",
      database: "d621k26bqnaiv7",
      host: "ec2-3-219-52-220.compute-1.amazonaws.com",
      dialect: "postgres",
      dialectOptions: {
        bigNumberStrings: true
      }
    },
    test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mysql"
    },
    production: {
        username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mysql"
    }
  }
  