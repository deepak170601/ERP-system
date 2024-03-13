import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import PieChart from './Piechart';
import TotalQuantityCircle from './TotalQuantityCircle';
import TotalOrdersCircle from './TotalOrdersCircle';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import products from '../data/products.json';
import orders from '../data/orders.json';
import '../App.css';

function Dashboard() {
  const totalQuantity = products.reduce((total, product) => total + product.stock_quantity, 0);
  const totalOrders = orders.length;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [numberOfOrdersForSelectedDate, setNumberOfOrdersForSelectedDate] = useState(0);

  useEffect(() => {
    const fetchOrdersByDate = async () => {
      try {
        const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
        const numberOfOrders = orders.reduce((count, order) => {
          const orderDate = order.order_date.split('T')[0]; // Update this line
          if (orderDate === formattedSelectedDate) {
            return count + 1;
          }
          return count;
        }, 0);

        setNumberOfOrdersForSelectedDate(numberOfOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrdersByDate();
  }, [selectedDate]);

  const onChangeDate = date => {
    setSelectedDate(date);
  };

  return (
    <>
      <Navbar />
      <h1 className="dashboard-h1">Dashboard</h1>
      <div className="dashboard-container">
           <PieChart data={products} />
        <div className="order-summary">
          <TotalOrdersCircle totalOrders={totalOrders} />
        </div>
        <div className="product-summary">
          <TotalQuantityCircle totalQuantity={totalQuantity} />
        </div>

        <div className="calendar-container">
          <h3>Orders Calendar View</h3>
          <Calendar onChange={onChangeDate} value={selectedDate} />
          <div className="orders-for-date">
            <h3>Orders for {selectedDate.toDateString()}:</h3>
            <p>Number of Orders: {numberOfOrdersForSelectedDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
