/*************************
* layout.jsx             *
*Ameekha Sherief         *             
* 3011968408             *
* 28-09-2024             *
/*************************/

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';
import '../src/index.css'; // Ensure this path is correct

export default function Layout() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="football" className="logo" width="100px" height="100px" />
        <h1 className="title">My Portfolio</h1>
        <nav className="menu">
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/services">Services</Link> | 
          <Link to="/project">Project</Link> | 
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <br />
      <hr />
    </>
  );
}
