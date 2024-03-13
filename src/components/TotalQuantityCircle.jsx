// TotalQuantityCircle.jsx

import React from 'react';

const TotalQuantityCircle = ({ totalQuantity }) => {
  return (
    <div className="total-quantity-circle">
        <h3>Product Quantitiy</h3>
        <div>
        <svg width="200" height="200">
        <circle cx="100" cy="100" r="96" stroke="#ddd" strokeWidth="0" fill="#fff" />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="30" fill="#333">
          {totalQuantity}
        </text>
      </svg>
        </div>
      
    </div>
  );
};

export default TotalQuantityCircle;
