// Card.js
import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '10px 0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      {children}
    </div>
  );
};

export default Card;
