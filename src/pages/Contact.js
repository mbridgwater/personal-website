// pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div style={pageStyle}>
      <h1>Contact Page</h1>
      <p>Feel free to reach out!</p>
    </div>
  );
};

const pageStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ccc',
};

export default Contact;
