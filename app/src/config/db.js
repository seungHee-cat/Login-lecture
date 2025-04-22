"use strict";

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "mysql-lunar.c9y8y8saqwiu.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "q9zyxh4q!",
  database: "login_lecture",
});

db.connect();

module.exports = db;