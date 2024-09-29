/*************************
* Services.jsx           *
*Ameekha Sherief         *             
* 3011968408             *
* 28-09-2024             *
/*************************/

import React from 'react';
import '../src/services.css';

const Services = () => {
  const handleClick = (service) => {
    alert(`You've clicked on ${service}! 🤖`);
  };

  return (
    <div className="services-container">
      <h1>Services</h1>
      <ul className="services-list">
        <li className="service-item" onClick={() => handleClick('Web Development')}>
          <span className="service-icon">💻</span> Custom Web Development 🌐
        </li>
        <li className="service-item" onClick={() => handleClick('Mobile App Development')}>
          <span className="service-icon">📱</span> CMS Development 📝
        </li>
        <li className="service-item" onClick={() => handleClick('Programming')}>
          <span className="service-icon">🖥️</span> Back-End Development 🛠️
        </li>
      </ul>
      <p className="more-info">
        Contact me via the contact page for more info
      </p>
    </div>
  );
};

export default Services;
