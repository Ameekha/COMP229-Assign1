/*************************
* Home.jsx             *
*Ameekha Sherief         *             
* 3011968408             *
* 28-09-2024             *
/*************************/

import { useEffect } from 'react';
import BBG from '../src/assets/profile.jpg';
import '../src/index.css';

export default function Home() {
    useEffect(() => {
        const welcomeMessage = document.querySelector('.hello');
        let index = 0;
        const message = "Welcome to my Portfolio!";
        
        const typingEffect = setInterval(() => {
            if (index < message.length) {
                welcomeMessage.textContent += message.charAt(index);
                index++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100); // Speed of typing

        return () => clearInterval(typingEffect); 
    }, []);

    return (
        <>
            <section id="intro">
                <div className="introContent">
                    <span className="hello"></span><br />
                    <span className="introText">
                    <img src={BBG} alt="profile" className="bbg" />
                        <br/>
                        My name is <span className="introName">Ameekha Sherief</span>
                        
                        <br/> 
                    </span>
                    <p className="introPara">
                    Hello, I'm Ameekha Sherief, a passionate software programmer and web designer dedicated to building clean, functional, and visually engaging digital experiences. With expertise in modern technologies and a knack for solving complex problems, I turn ideas into reality through code. 
                    </p>
                    <p className="introPara">
                    I am committed to creating innovative, high-quality digital experiences through responsive web design and robust software development. Let's bring your vision to life.
                    </p>
                    <br></br>
                    <br></br>
                    
                    <a href="..//src/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="resumeLink" >
                        Download My Resume
                    </a>
                   
                    <a href="/about" className="btn">About Me</a>
                </div>
            </section>
        </>
    );
}
