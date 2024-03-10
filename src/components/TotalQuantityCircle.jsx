// TotalQuantityCircle.jsx

import React from 'react';

const TotalQuantityCircle = ({ totalQuantity }) => {
  return (
    <div className="total-quantity-circle">
        <h3>Product Quantitiy</h3>
        <div>
        <svg width="100" height="100">
        <circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="3" fill="#fff" />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="20" fill="#333">
          {totalQuantity}
        </text>
      </svg>
        </div>
      
    </div>
  );
};

export default TotalQuantityCircle;
