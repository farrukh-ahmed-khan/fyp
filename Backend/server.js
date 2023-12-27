const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const { prices } = require("./constant");

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "weddingspot",
});

app.post("/weddingspot", (req, res) => {
  const sql =
    "INSERT INTO login (`firstname`, `lastname`, `email`, `password`) VALUES (?)";
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.password,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/vendors", (req, res) => {
  const sql =
    "INSERT INTO vendorlogin (`firstname`, `lastname`, `email`, `password`) VALUES (?)";
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.password,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/vendorlogin", (req, res) => {
  const sql = "SELECT * FROM vendorlogin WHERE `email` = ? AND `password` = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Login Successful");
    } else {
      return res.json("Invalid Email or Password");
    }
  });
});

app.post("/contact", (req, res) => {
  const sql =
    "INSERT INTO contact (`name`, `phone`, `email`, `message`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.phone,
    req.body.email,
    req.body.message,
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

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Login Successful");
    } else {
      return res.json("Invalid Email or Password");
    }
  });
});

app.listen(8081, () => {
  console.log("Server is running at port 8081");
});

// vendor-form api

app.post("/vendorform", (req, res) => {
  const formData = req.body;

  const selectedServices = req.body.services || [];
  const selectedRequirements = req.body.requirements || [];

  const vendorFormSql =
    "INSERT INTO vendorform (name, email,hallName,city,area,maxPrice,price,guests,rating,phone,advanced,additionalDetails) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?)";
  const vendorFormValues = [
    formData.name,
    formData.email,
    formData.hallName,
    formData.city,
    formData.area,
    formData.maxPrice,
    formData.price,
    formData.guests,
    formData.rating,
    formData.phone,
    formData.advanced,
    formData.additionalDetails,
    // formData.minPrice,
    // formData.maxPrice,
    // formData.address,
    // formData.capacity,
    // formData.advancepayment,
    // formData.additionalDetails
  ];

  db.query(vendorFormSql, vendorFormValues, (err, vendorFormResult) => {
    if (err) {
      console.error("Error inserting data into the database:", err);
      return res
        .status(500)
        .json({ error: "Error inserting data into the database" });
    }

    const vendorId = vendorFormResult.insertId;

    if (selectedServices.length > 0) {
      const servicesSql =
        "INSERT INTO vendor_services (vendorId, serviceName) VALUES ?";
      const servicesValues = selectedServices.map((service) => [
        vendorId,
        service,
      ]);

      db.query(servicesSql, [servicesValues], (err) => {
        if (err) {
          console.error("Error inserting services into the database:", err);
          return res
            .status(500)
            .json({ error: "Error inserting services into the database" });
        }
      });
    }

    if (selectedRequirements.length > 0) {
      const requirementsSql =
        "INSERT INTO vendor_requirements (vendorId, requirementName) VALUES ?";
      const requirementsValues = selectedRequirements.map((requirement) => [
        vendorId,
        requirement,
      ]);

      db.query(requirementsSql, [requirementsValues], (err) => {
        if (err) {
          console.error("Error inserting requirements into the database:", err);
          return res
            .status(500)
            .json({ error: "Error inserting requirements into the database" });
        }
      });
    }

    res.json({ success: true, vendorId });
  });
});

// Assuming you have an Express app and a database connection (db) set up

// GET endpoint for fetching all vendor form data with services and requirements
app.get("/getvendorforms", (req, res) => {
  const getAllVendorFormsSql = "SELECT * FROM vendorform";
  db.query(getAllVendorFormsSql, (err, vendorFormsResult) => {
    if (err) {
      console.error(
        "Error fetching all vendor form data from the database:",
        err
      );
      return res
        .status(500)
        .json({
          error: "Error fetching all vendor form data from the database",
        });
    }

    // Fetch services for all vendors
    const getServicesSql = "SELECT vendorId, serviceName FROM vendor_services";
    db.query(getServicesSql, (err, servicesResult) => {
      if (err) {
        console.error("Error fetching services from the database:", err);
        return res
          .status(500)
          .json({ error: "Error fetching services from the database" });
      }

      // Fetch requirements for all vendors
      const getRequirementsSql =
        "SELECT vendorId, requirementName FROM vendor_requirements";
      db.query(getRequirementsSql, (err, requirementsResult) => {
        if (err) {
          console.error("Error fetching requirements from the database:", err);
          return res
            .status(500)
            .json({ error: "Error fetching requirements from the database" });
        }

        // Organize the data in a format suitable for the response
        const vendorForms = vendorFormsResult.map((vendorForm) => {
          const vendorId = vendorForm.id;

          // Filter services and requirements based on vendorId
          const vendorServices = servicesResult
            .filter((service) => service.vendorId === vendorId)
            .map((service) => service.serviceName);

          const vendorRequirements = requirementsResult
            .filter((requirement) => requirement.vendorId === vendorId)
            .map((requirement) => requirement.requirementName);

          // Combine all data for each vendor
          return {
            ...vendorForm,
            services: vendorServices,
            requirements: vendorRequirements,
          };
        });

        res.json(vendorForms);
      });
    });
  });
});

// stripe payment gateway

// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// app.post('/checkout', async (req, res) => {
//     try {
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         mode: 'payment',
//         line_items: req.body.items.map(item => {
//           return {
//             price_data: {
//               currency: 'pkr',
//               product_data: {
//                 name: item.name,
//               },
//               unit_amount: item.price * 100,
//             },
//             quantity: item.quantity,
//           };
//         }),
//         success_url: 'http://localhost:3000/success',
//         cancel_url: 'http://localhost:3000/cancel',
//       });

//       res.json({ url: session.url });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ error: error.message });
//     }
//   });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// app.post('/checkout', async (req, res) => {
//     try {
//         const { date, time, hallName, items } = req.body;

//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             mode: 'payment',
//             line_items: items.map(item => {
//                 return {
//                     price_data: {
//                         currency: 'pkr',
//                         product_data: {
//                             name: item.name,
//                         },
//                         unit_amount: item.price * 100,
//                     },
//                     quantity: item.quantity,
//                 };
//             }),
//             success_url: 'http://localhost:3000/success',
//             cancel_url: 'http://localhost:3000/cancel',
//             metadata: {
//                 date,
//                 time,
//                 hallName,
//             },
//         });

//         // Log the session.url to check if it's set properly
//         console.log("Received data:", req.body);
//         // console.log("Session URL:", session.url);

//         res.json({ url: session.url });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: error.message });
//     }
// });

app.post("/checkout", async (req, res) => {
  try {
    const { date, time, hallName, items, package, halladvance } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item) => ({
        price_data: {
          currency: "pkr",
          product_data: {
            name: item.name,
            description: `Date: ${date}, Time: ${time}, Hall: ${hallName}`,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      metadata: {
        date,
        time,
        hallName,
        package, // Add package to metadata
        halladvance, // Add finalPrice to metadata
      },
    });

    console.log("Received data:", req.body);
    console.log("Session URL:", session.url);

    res.json({ url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});


// Inside your server.js
app.post("/onlyservice", async (req, res) => {
  try {
    const {
      date,
      time,
      selectedServices,
      selectedPackage,
      totalPrice,
      address,
      name,
      email,
      phone,
    } = req.body;

    // Convert selectedServices array to a comma-separated string
    const servicesDescription = selectedServices.join(", ");

    // Modify this part based on your actual Stripe integration logic
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: selectedServices.map((service) => ({
        price_data: {
          currency: "pkr",
          product_data: {
            name: service,
            description: `Date: ${date}, Time: ${time}, Services: ${servicesDescription}`,
          },
          unit_amount: prices[service][selectedPackage] * 100,
        },
        quantity: 1,
      })),
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      metadata: {
        date,
        time,
        selectedServices: servicesDescription, // Use the string here
        totalPrice,
        address,
        name,
        email,
        phone,
      },
    });

    console.log("Received data:", req.body);
    console.log("Session URL:", session.url);

    res.json({ url: session.url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
