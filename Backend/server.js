const express = require('express');
const mysql = require('mysql');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "weddingspot"
});



app.post('/weddingspot', (req, res) => {
    const sql = "INSERT INTO login (`firstname`, `lastname`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            res.json("Error")
        }
        return res.json(data);
    });
});

app.post('/contact', (req, res) => {
    const sql = "INSERT INTO contact (`name`, `phone`, `email`, `message`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.message
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            res.json("Error")
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            res.json("Error")
        }
        if(data.length > 0){
            return res.json("Login Successful");
        }else{
            return res.json("Invalid Email or Password");
        }
    });
});

app.listen(8081, () => {
    console.log('Server is running at port 8081');
});