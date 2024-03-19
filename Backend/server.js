const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
// const { getPrices, setPrices } = require("./constant");

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
  const insertSql =
    "INSERT INTO users (`firstname`, `lastname`, `email`, `password`) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.password,
  ];

  db.query(insertSql, values, (err, data) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: "Email already exists" });
      } else {
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }

    // Successful insertion
    return res.json(data);
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
  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";

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

app.post("/addFavorite", (req, res) => {
  const { userId, venueId } = req.body;

  // Check if the favorite already exists
  const checkFavoriteSql = "SELECT * FROM user_favorites WHERE userId = ? AND venueId = ?";
  db.query(checkFavoriteSql, [userId, venueId], (err, result) => {
    if (err) {
      console.error("Error checking favorite:", err);
      return res.status(500).json({ error: "Error checking favorite" });
    }

    if (result.length > 0) {
      // The favorite already exists, return an error or handle as appropriate
      return res.status(400).json({ error: "Favorite already exists" });
    }

    // Insert the favorite into the database
    const addFavoriteSql = "INSERT INTO user_favorites (userId, venueId) VALUES (?, ?)";
    db.query(addFavoriteSql, [userId, venueId], (err, result) => {
      if (err) {
        console.error("Error adding favorite:", err);
        return res.status(500).json({ error: "Error adding favorite" });
      }
      
      // Favorite added successfully
      res.status(200).json({ message: "Favorite added successfully" });
    });
  });
});


// vendor-form api

app.post("/vendors", (req, res) => {
  const insertSql =
    "INSERT INTO vendorlogin (`firstname`, `lastname`, `email`, `password`) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.fname,
    req.body.lname,
    req.body.email,
    req.body.password,
  ];

  db.query(insertSql, values, (err, data) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: "Email already exists" });
      } else {
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }

    // Successful insertion
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

app.get("/vendor-venues", (req, res) => {
  const vendorEmail = req.query.email;

  const venuesSql = "SELECT * FROM vendorform WHERE email = ?";
  db.query(venuesSql, [vendorEmail], (err, venuesResult) => {
    if (err) {
      console.error("Error fetching vendor venues:", err);
      return res.status(500).json({ error: "Error fetching vendor venues" });
    }

    const venues = venuesResult.map((venue) => {
      const {
        id,
        hallName,
        city,
        area,
        maxPrice,
        price,
        guests,
        rating,
        phone,
        advanced,
        createdAt,
        name,
        email,
        additionalDetails,
      } = venue;
      return {
        id,
        hallName,
        city,
        area,
        maxPrice,
        price,
        guests,
        rating,
        phone,
        advanced,
        createdAt,
        name,
        email,
        additionalDetails,
      };
    });

    // Fetch services and requirements for each venue
    const venuesWithDetails = [];

    const fetchDetailsPromises = venues.map(async (venue) => {
      const { id } = venue;

      const servicesSql =
        "SELECT serviceName FROM vendor_services WHERE vendorId = ?";
      const requirementsSql =
        "SELECT requirementName FROM vendor_requirements WHERE vendorId = ?";

      const [servicesResult, requirementsResult] = await Promise.all([
        new Promise((resolve) => {
          db.query(servicesSql, [id], (err, servicesResult) => {
            if (err) {
              console.error("Error fetching services:", err);
              resolve([]);
            } else {
              resolve(servicesResult.map((service) => service.serviceName));
            }
          });
        }),
        new Promise((resolve) => {
          db.query(requirementsSql, [id], (err, requirementsResult) => {
            if (err) {
              console.error("Error fetching requirements:", err);
              resolve([]);
            } else {
              resolve(
                requirementsResult.map(
                  (requirement) => requirement.requirementName
                )
              );
            }
          });
        }),
      ]);

      venuesWithDetails.push({
        ...venue,
        services: servicesResult,
        requirements: requirementsResult,
      });
    });

    Promise.all(fetchDetailsPromises).then(() => {
      res.json(venuesWithDetails);
    });
  });
});

app.delete("/delete-venue/:id", (req, res) => {
  const venueId = req.params.id;

  const deleteVenueSql = "DELETE FROM vendorform WHERE id = ?";
  db.query(deleteVenueSql, [venueId], (err) => {
    if (err) {
      console.error("Error deleting venue:", err);
      return res.status(500).json({ error: "Error deleting venue" });
    }

    res.sendStatus(200);
  });
});

app.put("/edit-venue/:id", (req, res) => {
  const venueId = parseInt(req.params.id, 10);
  const updatedData = req.body;

  const selectedServices = req.body.services || [];
  const selectedRequirements = req.body.requirements || [];

  const {
    name,
    email,
    hallName,
    city,
    area,
    maxPrice,
    price,
    guests,
    rating,
    phone,
    advanced,
    additionalDetails,
  } = updatedData;

  const setClause = [];
  const updateVendorFormValues = [];

  const addToSetClause = (field, value) => {
    if (value !== undefined) {
      setClause.push(`${field} = ?`);
      updateVendorFormValues.push(value);
    }
  };

  addToSetClause("name", name);
  addToSetClause("email", email);
  addToSetClause("hallName", hallName);
  addToSetClause("city", city);
  addToSetClause("area", area);
  addToSetClause("maxPrice", maxPrice);
  addToSetClause("price", price);
  addToSetClause("guests", guests);
  addToSetClause("rating", rating);
  addToSetClause("phone", phone);
  addToSetClause("advanced", advanced);
  addToSetClause("additionalDetails", additionalDetails);

  const updateVendorFormSql =
    setClause.length > 0
      ? "UPDATE vendorform SET " + setClause.join(", ") + " WHERE id=?"
      : null;

  if (updateVendorFormSql) {
    updateVendorFormValues.push(venueId);

    db.query(updateVendorFormSql, updateVendorFormValues, (err, result) => {
      if (err) {
        console.error("Error updating vendorform:", err);
        return res.status(500).json({ error: "Error updating vendorform" });
      }

      const updateServicesSql = "DELETE FROM vendor_services WHERE vendorId=?";
      db.query(updateServicesSql, [venueId], (err) => {
        if (err) {
          console.error("Error deleting services:", err);
          return res.status(500).json({ error: "Error deleting services" });
        }

        const insertServicesSql =
          "INSERT INTO vendor_services (vendorId, serviceName) VALUES ?";
        const servicesValues = selectedServices.map((service) => [
          venueId,
          service,
        ]);

        db.query(insertServicesSql, [servicesValues], (err) => {
          if (err) {
            console.error("Error inserting services:", err);
            return res.status(500).json({ error: "Error inserting services" });
          }

          const updateRequirementsSql =
            "DELETE FROM vendor_requirements WHERE vendorId=?";
          db.query(updateRequirementsSql, [venueId], (err) => {
            if (err) {
              console.error("Error deleting requirements:", err);
              return res
                .status(500)
                .json({ error: "Error deleting requirements" });
            }

            const insertRequirementsSql =
              "INSERT INTO vendor_requirements (vendorId, requirementName) VALUES ?";
            const requirementsValues = selectedRequirements.map(
              (requirement) => [venueId, requirement]
            );

            db.query(insertRequirementsSql, [requirementsValues], (err) => {
              if (err) {
                console.error("Error inserting requirements:", err);
                return res
                  .status(500)
                  .json({ error: "Error inserting requirements" });
              }

              res.json({
                success: true,
                message: "Venue updated successfully",
              });
            });
          });
        });
      });
    });
  } else {
    res.json({
      success: true,
      message: "No fields to update",
    });
  }
});

app.get("/getvendorforms", (req, res) => {
  const getAllVendorFormsSql = "SELECT * FROM vendorform";
  db.query(getAllVendorFormsSql, (err, vendorFormsResult) => {
    if (err) {
      console.error(
        "Error fetching all vendor form data from the database:",
        err
      );
      return res.status(500).json({
        error: "Error fetching all vendor form data from the database",
      });
    }

    const getServicesSql = "SELECT vendorId, serviceName FROM vendor_services";
    db.query(getServicesSql, (err, servicesResult) => {
      if (err) {
        console.error("Error fetching services from the database:", err);
        return res
          .status(500)
          .json({ error: "Error fetching services from the database" });
      }

      const getRequirementsSql =
        "SELECT vendorId, requirementName FROM vendor_requirements";
      db.query(getRequirementsSql, (err, requirementsResult) => {
        if (err) {
          console.error("Error fetching requirements from the database:", err);
          return res
            .status(500)
            .json({ error: "Error fetching requirements from the database" });
        }

        const vendorForms = vendorFormsResult.map((vendorForm) => {
          const vendorId = vendorForm.id;

          const vendorServices = servicesResult
            .filter((service) => service.vendorId === vendorId)
            .map((service) => service.serviceName);

          const vendorRequirements = requirementsResult
            .filter((requirement) => requirement.vendorId === vendorId)
            .map((requirement) => requirement.requirementName);

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

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// app.post("/checkout", async (req, res) => {
//   try {
//     const {
//       date,
//       time,
//       hallName,
//       items,
//       package,
//       halladvance,
//       finalPrice,
//       name,
//       email,
//       phone,
//     } = req.body;

//     // Insert data into the checkout_orders table
//     const checkoutInsertSql =
//       "INSERT INTO checkout_orders (date, time, hallName, package, halladvance,finalPrice,name, email,phone) VALUES (?, ?, ?, ?, ?, ?,?,?,?)";
//     const checkoutInsertValues = [
//       date,
//       time,
//       hallName,
//       package,
//       halladvance,
//       finalPrice,
//       name,
//       email,
//       phone,
//     ];
//     const result = await db.query(checkoutInsertSql, checkoutInsertValues);
//     console.log(result);
//     const orderId = result.id;

//     const selectedServicesInsertSql =
//       "INSERT INTO selected_services (order_id, service_id, service_name, quantity, price) VALUES (?, ?, ?, ?, ?)";
//     const selectedServicesInsertValues = items.flatMap((item) => [
//       orderId,
//       item.id, // Assuming each service has a unique ID
//       item.name,
//       item.quantity,
//       item.price,
//     ]);

//     await db.query(selectedServicesInsertSql, selectedServicesInsertValues);

//     // Create the Stripe session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: items.map((item) => ({
//         price_data: {
//           currency: "pkr",
//           product_data: {
//             name: item.name,
//             description: `Date: ${date}, Time: ${time}, Hall: ${hallName}`,
//           },
//           unit_amount: item.price * 100,
//         },
//         quantity: item.quantity,
//       })),
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//       metadata: {
//         date,
//         time,
//         hallName,
//         package,
//         halladvance,
//         orderId,
//       },
//     });

//     console.log("Received data:", req.body);
//     console.log("Session URL:", session.url);

//     // Send orderId along with the URL in the response
//     res.json({ url: session.url, orderId });
//   } catch (error) {
//     console.log("Error during checkout:", error);
//     res.status(500).json({ error: error.message });
//   }
// });



// Example middleware to set service prices from the database
app.put('/update-prices', async (req, res) => {
  try {
    const { service, packageType, price } = req.body;

    // Validate input data
    if (!service || !packageType || !price) {
      return res.status(400).json({ error: 'Invalid data in the request' });
    }

    // Sanitize input to prevent SQL injection
    const sanitizedService = mysql.escape(service);
    const sanitizedPackageType = mysql.escape(packageType);
    const sanitizedPrice = mysql.escape(price);

    // Update the record in the database based on service and packageType
    const updateQuery = `
      UPDATE prices_configuration
      SET price = ${sanitizedPrice}
      WHERE service = ${sanitizedService} AND package = ${sanitizedPackageType}
    `;

    await db.query(updateQuery);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});
app.use((req, res, next) => {
  const query = "SELECT * FROM prices_configuration";

  db.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      const prices = {};

      results.forEach((row) => {
        if (!prices[row.service]) {
          prices[row.service] = {};
        }

        prices[row.service][row.package] = row.price;
      });

      console.log("Setting servicePrices from the database:", prices);

      // Set the servicePrices in the app's local variables
      req.app.set("servicePrices", prices);

      next(); // Move to the next middleware or route handler
    }
  });
});
app.post("/checkout", async (req, res) => {
  try {
    const {
      date,
      time,
      hallName,
      hallId,
      hallAdvance,
      selectedServices,
      selectedPackage,
      totalPrice,
      name,
      email,
      phone,
    } = req.body;

    const frontendPrices = req.app.get("servicePrices");
    console.log("Frontend Prices:", frontendPrices);

    const servicesDescription = selectedServices
      .map((service) => service.service)
      .join(", ");

    const hallAdvanceLineItem = {
      price_data: {
        currency: "pkr",
        product_data: {
          name: "Hall Advance",
          description: `Advance payment for the hall`,
        },
        unit_amount: hallAdvance * 100,
      },
      quantity: 1,
    };

    const serviceLineItems = selectedServices.map((service) => ({
      price_data: {
        currency: "pkr",
        product_data: {
          name: service.service,
          description: `Date: ${date}, Time: ${time}, Services: ${servicesDescription}`,
        },
        unit_amount: frontendPrices[service.service][selectedPackage] * 100,
      },
      quantity: 1,
    }));

    const line_items = [hallAdvanceLineItem, ...serviceLineItems];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      metadata: {
        date,
        time,
        selectedServices: servicesDescription,
        totalPrice,
        name,
        email,
        phone,
        hallName,
        hallId,
        hallAdvance,
      },
    });

    console.log("Received data:", req.body);
    console.log("Session URL:", session.url);

    const insertQuery = `
      INSERT INTO successful_payments 
      (date, time, services, package, total_price, name, email, phone, hallName, hall_id, hallAdvance) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.query(insertQuery, [
      date,
      time,
      JSON.stringify(selectedServices),
      selectedPackage,
      totalPrice,
      name,
      email,
      phone,
      hallName,
      hallId,
      hallAdvance,
    ]);

    res.status(200).json({ url: session.url, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// app.post("/onlyservice", async (req, res) => {
//   try {
//     const {
//       date,
//       time,
//       selectedServices,
//       selectedPackage,
//       totalPrice,
//       address,
//       name,
//       email,
//       phone,
//     } = req.body;

//     const frontendPrices = req.app.get("servicePrices");
//     console.log("Frontend Prices:", frontendPrices);

//     const servicesDescription = selectedServices
//       .map((service) => service.service)
//       .join(", ");

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: selectedServices.map((service) => ({
//         price_data: {
//           currency: "pkr",
//           product_data: {
//             name: service.service,
//             description: `Date: ${date}, Time: ${time}, Services: ${servicesDescription}`,
//           },
//           unit_amount: frontendPrices[service.service][selectedPackage] * 100, // Amount in cents
//         },
//         quantity: 1,
//       })),
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//       metadata: {
//         date,
//         time,
//         selectedServices: servicesDescription,
//         totalPrice,
//         address,
//         name,
//         email,
//         phone,
//       },
//     });

//     console.log("Received data:", req.body);
//     console.log("Session URL:", session.url);

//     res.json({ url: session.url });
//     const insertQuery = `
//     INSERT INTO only_service_payment 
//     (date, time, services, package, total_price, address, name, email, phone) 
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//   `;

//     await db.query(insertQuery, [
//       req.body.date,
//       req.body.time,
//       JSON.stringify(req.body.selectedServices),
//       req.body.selectedPackage,
//       req.body.totalPrice,
//       req.body.address,
//       req.body.name,
//       req.body.email,
//       req.body.phone,
//     ]);

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


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

    const frontendPrices = req.app.get("servicePrices");
    console.log("Frontend Prices:", frontendPrices);

    const servicesDescription = selectedServices
      .map((service) => service.service)
      .join(", ");

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: selectedServices.map((service) => ({
        price_data: {
          currency: "pkr",
          product_data: {
            name: service.service,
            description: `Date: ${date}, Time: ${time}, Services: ${servicesDescription}`,
          },
          unit_amount: frontendPrices[service.service][selectedPackage] * 100, // Amount in cents
        },
        quantity: 1,
      })),
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      metadata: {
        date,
        time,
        selectedServices: servicesDescription,
        totalPrice,
        address,
        name,
        email,
        phone,
      },
    });

    console.log("Received data:", req.body);
    console.log("Session URL:", session.url);

    const insertQuery = `
      INSERT INTO only_service_payment 
      (date, time, services, package, total_price, address, name, email, phone) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.query(insertQuery, [
      date,
      time,
      JSON.stringify(selectedServices),
      selectedPackage,
      totalPrice,
      address,
      name,
      email,
      phone,
    ]);

    res.status(200).json({ url: session.url, success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/services-prices", (req, res) => {
  const query = "SELECT * FROM prices_configuration";

  db.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      const prices = {};

      results.forEach((row) => {
        if (!prices[row.service]) {
          prices[row.service] = {};
        }

        prices[row.service][row.package] = row.price;
      });

      res.json(prices);
    }
  });
});

app.get("/serviceorders", (req, res) => {
  const sql = "SELECT * FROM only_service_payment";

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      res.json({ error: "Error retrieving data from the database" });
    } else {
      res.json(data);
    }
  });
});






app.get("/checkoutdata", (req, res) => {
  const sql = "SELECT * FROM successful_payments";

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      res.json({ error: "Error retrieving data from the database" });
    } else {
      res.json(data);
    }
  });
});

app.get("/getcontactform", (req, res) => {
  const sql = "SELECT * FROM contact";

  db.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      res.json({ error: "Error retrieving data from the database" });
    } else {
      res.json(data);
    }
  });
});

app.get("/all-vendor-venues", (req, res) => {
  const venuesSql = "SELECT * FROM vendorform";

  db.query(venuesSql, (err, venuesResult) => {
    if (err) {
      console.error("Error fetching vendor venues:", err);
      return res.status(500).json({ error: "Error fetching vendor venues" });
    }

    const venues = venuesResult.map((venue) => {
      const {
        id,
        hallName,
        city,
        area,
        maxPrice,
        price,
        guests,
        rating,
        phone,
        advanced,
        createdAt,
        name,
        email,
        additionalDetails,
      } = venue;
      return {
        id,
        hallName,
        city,
        area,
        maxPrice,
        price,
        guests,
        rating,
        phone,
        advanced,
        createdAt,
        name,
        email,
        additionalDetails,
      };
    });

    // Fetch services and requirements for each venue
    const venuesWithDetails = [];

    const fetchDetailsPromises = venues.map(async (venue) => {
      const { id } = venue;

      const servicesSql =
        "SELECT serviceName FROM vendor_services WHERE vendorId = ?";
      const requirementsSql =
        "SELECT requirementName FROM vendor_requirements WHERE vendorId = ?";

      const [servicesResult, requirementsResult] = await Promise.all([
        new Promise((resolve) => {
          db.query(servicesSql, [id], (err, servicesResult) => {
            if (err) {
              console.error("Error fetching services:", err);
              resolve([]);
            } else {
              resolve(servicesResult.map((service) => service.serviceName));
            }
          });
        }),
        new Promise((resolve) => {
          db.query(requirementsSql, [id], (err, requirementsResult) => {
            if (err) {
              console.error("Error fetching requirements:", err);
              resolve([]);
            } else {
              resolve(
                requirementsResult.map(
                  (requirement) => requirement.requirementName
                )
              );
            }
          });
        }),
      ]);

      venuesWithDetails.push({
        ...venue,
        services: servicesResult,
        requirements: requirementsResult,
      });
    });

    // Resolve all promises and send the response
    Promise.all(fetchDetailsPromises)
      .then(() => {
        res.json(venuesWithDetails);
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Error fetching details" });
      });
  });
});

app.listen(8081, () => {
  console.log("Server is running at port 8081");
});
