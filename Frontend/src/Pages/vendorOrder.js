import React, { useEffect, useState } from 'react';
import '../../src/Assets/css/vendororder.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbr from '../Components/CommonComponent/Nav';
import Footer from '../Components/CommonComponent/Footer';

const VendorOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const vendoremail = localStorage.getItem('vendor');

        if (!vendoremail) {
          toast.error('Vendor email is not found in local storage');
          return;
        }

        const response = await axios.post(
          'http://localhost:8081/vendor-orders',
          { email: vendoremail }
        );

        // Check if orders exist in the response data
        if (response.data.orders !== undefined) {
          const formattedOrders = response.data.orders.map((order) => {
            // Format date
            const date = new Date(order.date);
            const formattedDate = `${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`;

            // Format time
            const time = new Date(`1970-01-01T${order.time}`);
            const formattedTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

            return {
              ...order,
              date: formattedDate,
              time: formattedTime,
            };
          });
          setOrders(formattedOrders);
        } else {
          toast.error('No orders found for this vendor');
        }
      } catch (err) {
        console.error(err);
        toast.error('An error occurred while fetching orders');
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Navbr />
      <div className="vendororderwrapper">
        <div className="container">
          <div className="row">
            <h2 style={{ textAlign: 'center' }}>Vendor Orders</h2>
            {orders.length > 0 ? (
              <ul>
                {orders.map((order, index) => (
                  <li key={index} className="order">
                    {order.name} - {order.email} - {order.phone} - {order.date}{' '}
                    - {order.time} - {order.hallName}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VendorOrders;
