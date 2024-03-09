import React from 'react';
import erpIcon from '../Icons/order-fulfillment.png'; // Replace with the correct path to your icon/image

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img src={erpIcon} alt="ERP Icon" className="erp-icon" />
      </div>
      <div className="links-container">
        <a href="/">Dashboard</a>
        
        <a href="/products">Products</a>
        
        <a href="/orders">Orders</a>
      </div>
    </div>
  );
}

export default Navbar;
