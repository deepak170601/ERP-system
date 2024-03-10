// TotalOrdersCircle.jsx

import React from 'react';

const TotalOrdersCircle = ({ totalOrders }) => {
  return (
    <div className="total-orders-circle">
        <h3>Order Quantitiy</h3>
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="3" fill="#fff" />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="20" fill="#333">
          {totalOrders}
        </text>
      </svg>
    </div>
  );
};

export default TotalOrdersCircle;
