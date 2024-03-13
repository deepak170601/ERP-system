// TotalOrdersCircle.jsx

import React from 'react';

const TotalOrdersCircle = ({ totalOrders }) => {
  return (
    <div className="total-orders-circle">
        <h3>Order Quantitiy</h3>
      <svg width="200" height="200">
        <circle cx="100" cy="100" r="96" stroke="#ddd" strokeWidth="0" fill="#fff" />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="30" fill="#333">
          {totalOrders}
        </text>
      </svg>
    </div>
  );
};

export default TotalOrdersCircle;
