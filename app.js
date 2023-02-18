const express = require('express');
const mysql = require("mysql");
const doenv = require("dotenv");
const app=express();

doenv.config({
    path:'./.env'
})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
})

db.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
       console.log("MySql Connection Established");
    }
})

app.get("/",(req, res)=>{
    res.send("<h1>Welcome to Tutors.Pk #Malaika</h1>")
})

app.listen(5000,()=>{
    console.log("Server started @ port 5000")
});