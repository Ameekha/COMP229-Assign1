/*************************
* navbar.js              *
*Ameekha Sherief         *             
* 3011968408             *
* 28-09-2024             *
/*************************/

import React from "react";
import './navbar.css';
//import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
//import contactImg from '../../assets/contact.png';

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">Services</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me</button>
        </nav>
    )
}

export default Navbar
