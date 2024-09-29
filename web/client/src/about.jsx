/*************************
* about.jsx             *
*Ameekha Sherief         *             
* 3011968408             *
* 28-09-2024             *
/*************************/

import React from 'react';
import '../src/about.css';
import BBG from '../src/assets/profile.jpg';

export default function About() {
    return (
        <section id="aboutMe">
            <h1>About Me</h1>
            <div className="aboutContent">
                <img src={BBG} alt="Profile of Ameekha" className="profileImage" />
                <div className="aboutText">
                    <h2>Ameekha Sherief</h2>
                    <p>
                        I'm a full-stack developer with expertise in Java, C#, JavaScript, and both front-end and back-end development. I specialize in creating efficient, responsive web applications and software solutions that meet real-world needs. With a passion for clean code and user-friendly design, I’m always focused on delivering high-quality work that drives results.
                    </p>
                    <a href="..//src/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="resumeLink">
                        Download My Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
