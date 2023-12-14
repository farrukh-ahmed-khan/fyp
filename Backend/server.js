const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();


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


app.post('/vendors', (req, res) => {
    const sql = "INSERT INTO vendorlogin (`firstname`, `lastname`, `email`, `password`) VALUES (?)";
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

app.post('/vendorlogin', (req, res) => {
    const sql = "SELECT * FROM vendorlogin WHERE `email` = ? AND `password` = ?";
    
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
            console.error(err);
            res.json({ error: "Error inserting data into the database" });
        } else {
            res.json({ success: true });
        }
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


// stripe payment gateway

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// app.post('/checkout', async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       mode: 'payment',
//       line_items: req.body.items.map(item => {
//         return {
//           price_data: {
//             currency: 'pkr',
//             product_data: {
//               name: item.name,
              
//             },
//             unit_amount: (item.price)*100  ,
//           },
//           quantity: item.quantity,
//         };
//       }),
//       success_url: 'http://localhost:3000/success',
//       cancel_url: 'http://localhost:3000/cancel',
//     });

//     res.json({ id: session.id });
//     res.json({ url: session.url });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });
app.post('/checkout', async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.items.map(item => {
          return {
            price_data: {
              currency: 'pkr',
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
      });
  
      res.json({ url: session.url });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });
  