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

// app.post("/checkout", async (req, res) => {
//   try {
//     const { date, time, hallName, items, package, halladvance } = req.body;

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
//         package, // Add package to metadata
//         halladvance, // Add finalPrice to metadata
//       },
//     });

//     console.log("Received data:", req.body);
//     console.log("Session URL:", session.url);

//     res.json({ url: session.url });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// Inside your server.js
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

//     // Convert selectedServices array to a comma-separated string
//     const servicesDescription = selectedServices.join(", ");

//     // Modify this part based on your actual Stripe integration logic
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: selectedServices.map((service) => ({
//         price_data: {
//           currency: "pkr",
//           product_data: {
//             name: service,
//             description: `Date: ${date}, Time: ${time}, Services: ${servicesDescription}`,
//           },
//           unit_amount: prices[service][selectedPackage] * 100,
//         },
//         quantity: 1,
//       })),
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//       metadata: {
//         date,
//         time,
//         selectedServices: servicesDescription, // Use the string here
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
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });
// app.post("/checkout", async (req, res) => {
//   try {
//     const { date, time, hallName, items, package, halladvance } = req.body;

//     // Insert data into the checkout_orders table
//     const checkoutInsertSql =
//       "INSERT INTO checkout_orders (date, time, hallName,package,halladvance) VALUES (?, ?, ?,?,?)";
//     const checkoutInsertValues = [date, time, hallName,package,halladvance];
//     await db.query(checkoutInsertSql, checkoutInsertValues);

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
//         package, // Add package to metadata
//         halladvance, // Add finalPrice to metadata
//       },
//     });

//     console.log("Received data:", req.body);
//     console.log("Session URL:", session.url);

//     res.json({ url: session.url });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post("/checkout", async (req, res) => {
//   try {
//     const { date, time, hallName, items, package, halladvance } = req.body;

//     // Insert data into the checkout_orders table
//     const checkoutInsertSql =
//       "INSERT INTO checkout_orders (date, time, hallName, package, halladvance) VALUES (?, ?, ?, ?, ?)";
//     const checkoutInsertValues = [date, time, hallName, package, halladvance];
//     const result = await db.query(checkoutInsertSql, checkoutInsertValues);

//     const orderId = result.insertId; // Get the generated order ID

//     // Insert selected services into the selected_services table
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
//         orderId, // Add orderId to metadata
//       },
//     });

//     console.log("Received data:", req.body);
//     console.log("Session URL:", session.url);

//     res.json({ url: session.url });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get('/vendor-venues', (req, res) => {
//   const { email } = req.query;

//   const sql = 'SELECT * FROM vendorform WHERE email = ?';

//   db.query(sql, [email], (err, venues) => {
//     if (err) {
//       console.error('Error fetching venues:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       res.json(venues);
//     }
//   });
// });

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

// Example: Edit vendor form endpoint
// app.put("/edit-venue/:id", (req, res) => {
//   const venueId = req.params.id;
//   const updatedData = req.body;

//   const updateVenueSql = "UPDATE vendorform SET ? WHERE id = ?";
//   db.query(updateVenueSql, [updatedData, venueId], (err, result) => {
//     if (err) {
//       console.error("Error updating venue:", err);
//       return res.status(500).json({ error: "Error updating venue" });
//     }

//     res.json({ success: true, message: "Venue updated successfully" });
//   });
// });

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

//     const servicesDescription = selectedServices.join(", ");

//     const onlyserviceInsertSql =
//       "INSERT INTO onlyservice_orders (date, time, selectedServices, selectedPackage, totalPrice, address, name, email, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
//     const onlyserviceInsertValues = [
//       date,
//       time,
//       servicesDescription,
//       selectedPackage,
//       totalPrice,
//       address,
//       name,
//       email,
//       phone,
//     ];
//     await db.query(onlyserviceInsertSql, onlyserviceInsertValues);

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: selectedServices.map((service) => ({
//         price_data: {
//           currency: "pkr",
//           product_data: {
//             name: service,
//             description: `Date: ${date}, Time: ${time}, Services: ${servicesDescription}`,
//           },
//           unit_amount: prices[service][selectedPackage] * 100,
//         },
//         quantity: 1,
//       })),
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel",
//       metadata: {
//         date,
//         time,
//         selectedServices: servicesDescription, // Use the string here
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
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });

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

//     const frontendPrices = req.app.get('servicePrices');

//     const servicesDescription = selectedServices.map((service) => service.service).join(", ");

//     // Create the Stripe session
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
//           unit_amount: frontendPrices[service.service][selectedPackage] * 100,
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
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
// });