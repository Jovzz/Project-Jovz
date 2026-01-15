const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user:"root",
    password: "",
    database: "test",
});

connection.connect((err) => {
  if (err) {
    console.log("Database connection error",err);
  }else{
    console.log("Database connected successfully");
  }
});
    
  