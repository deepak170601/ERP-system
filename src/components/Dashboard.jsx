import React from 'react';
import Navbar from './Navbar';
import PieChart from './Piechart';
import TotalQuantityCircle from './TotalQuantityCircle';
import TotalOrdersCircle from './TotalOrdersCircle';
import products from '../data/products.json';
import orders from '../data/orders.json';
import '../App.css';

function Dashboard() {
  const totalQuantity = products.reduce((total, product) => total + product.stock_quantity, 0);
  const totalOrders = orders.length;

  return (
    <>
      <Navbar />
      <h1 className='dashboard-h1'>Dashboard</h1>
      <div className="dashboard-container">
                <PieChart data={products} />
        <div className="order-summary">
          <TotalOrdersCircle totalOrders={totalOrders} />
        </div>
        <div className="product-summary">
          <TotalQuantityCircle totalQuantity={totalQuantity} />
        </div>

      </div>
    </>
  );
}

export default Dashboard;
