/*************************
* project.jsx            *
* Ameekha Sherief        *             
* 3011968408             *
* 28-09-2024             *
/*************************/

import project1 from './assets/project1.png'; 
import project2 from './assets/project2.jpg';  
import project3 from './assets/project3.png';  
import { Link } from 'react-router-dom';
import './index.css';  
import './project.css'; 

export default function Project() {
    return (
        <>
            <section id="works">
                <h2 className="worksTitle">My Projects</h2>
                
                <div className="worksImgs">
                    <div className="project">
                        <img src={project1} className="worksImg" />
                        <h3>Calculator</h3>
                        <p><strong>Role:</strong> Developer</p>
                        <p><strong>Description:</strong> Made a calculator app. It consisted of a standard mode, scientific mode, and dark mode. Could handle complex nested expressions </p>
                    </div>
                    <div className="project">
                        <img src={project2} className="worksImg" />
                        <h3>Health App</h3>
                        <p><strong>Role:</strong> Documentation Lead & System Analyst</p>
                        <p><strong>Description:</strong> Collaborating on the development of a health tracking app designed for seamless input of health issues, with real-time notifications and integration with third-party apps to monitor vital signs like heart rate. Currently focused on creating comprehensive project documentation to ensure a solid foundation before coding begins.</p>
                    </div>
                    <div className="project">
                        <img src={project3} className="worksImg" />
                        <h3>Code Breaker Game</h3>
                        <p><strong>Role:</strong> Developer</p>
                        <p><strong>Description:</strong>created a virtual version of the game Codebreaker, modifying it to support a single-player mode. Additionally, I automated the role of the Codemaker, streamlining gameplay.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
