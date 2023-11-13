const express = require('express');
const mysql = require('mysql');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: 'signup'
});



app.post('/signup', (req, res) => {
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

app.listen(8081, () => {
    console.log('Server is running at port 8081');
});