/*************************
* contact.jsx              *
*Ameekha Sherief         *             
* 3011968408             *
* 28-09-2024             *
/*************************/

import '../src/contact.css';

export default function Contact() {
    return (
        <>
            <section className="contact-section">
                <h2>Contact Me</h2>
                <form id="contactForm">
                    <div className="form-group">
                        <label htmlFor="myFName">First Name:</label>
                        <input type="text" id="myFName" name="myFName" required placeholder="Ameekha" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="myLName">Last Name:</label>
                        <input type="text" id="myLName" name="myLName" required placeholder="Sherief" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="myEmail">Email:</label>
                        <input type="email" id="myEmail" name="myEmail" required placeholder="ameekha.sherief.ps@gmail.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="myMsg">Message:</label>
                        <input type="msg" id="myMsg" name="myMsg" required placeholder="Enter your message" />
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>

                <div className="contact-info">
                    <p>Call me at: <strong>(647) 545 5384 </strong></p>
                    <p>Email me at: <strong>ameekha.sherief.ps@gmail.com </strong></p>
                    <br></br>
                    
                </div>
            </section>
        </>
    );
}
