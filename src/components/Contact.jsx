import React, { useState } from 'react';

function Contact () {
    const [submitted, setSubmitted] = useState(false);
    const [info, setInfo] = useState({phone:'', email:'', github:'', linkedin:''});

    if(submitted){
        return(
            <div className="contact">
                <h3>Contact</h3>
                <p><img src="./assets/phone.svg"/>{info.phone}</p>
                <p><img src="./assets/mail.svg"/>{info.email}</p>
                <p><img src="./assets/github.svg"/>{info.github}</p>
                <p><img src="./assets/linkedin.svg"/>{info.linkedin}</p>
                <button className="edit-btn" onClick={() => setSubmitted(false)}>Edit Contact</button>
            </div>
        );
    }

    return(
        <form className="contact" onSubmit={() => setSubmitted(true)}>
            <h3>Contact</h3>
            <input type="tel" placeholder="Phone Number" value={info.phone} onChange={(e) => setInfo({...info, phone:e.target.value})} required/>
            <input type="email" placeholder="Email" value={info.email} onChange={(e) => setInfo({...info, email:e.target.value})} required/>
            <input type="url" placeholder="Github" value={info.github} onChange={(e) => setInfo({...info, github:e.target.value})} required/>
            <input type="url" placeholder="LinkedIn" value={info.linkedin} onChange={(e) => setInfo({...info, linkedin:e.target.value})} required/>
            <button type="submit">Save</button>
        </form>
    );
}

export default Contact;