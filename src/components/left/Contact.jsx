import React, { useState } from 'react';
import phoneIcon from '../../assets/phone.svg';
import mailIcon from '../../assets/mail.svg'; 
import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';

function Contact({ viewMode }) {
    const [submitted, setSubmitted] = useState(false);
    const [info, setInfo] = useState({
        phone:'',
        email:'',
        github:'',
        linkedin:''
    });

    if (submitted) {
        return (
            <div className="contact">
                <h3>Contact</h3>

                <p><img alt="phone" src={phoneIcon} /> {info.phone}</p>
                <p><img alt="email" src={mailIcon} /> {info.email}</p>

                <p>
                    <img alt="github" src={githubIcon} />
                    <a href={info.github} target="_blank" rel="noreferrer">
                        {info.github.replace(/^https?:\/\//,'')}
                    </a>
                </p>

                <p>
                    <img alt="linkedin" src={linkedinIcon} />
                    <a href={info.linkedin} target="_blank" rel="noreferrer">
                        {info.linkedin.replace(/^https?:\/\//,'')}
                    </a>
                </p>

                {!viewMode && (
                    <button
                        className="edit-btn"
                        onClick={() => setSubmitted(false)}
                    >
                        Edit Contact
                    </button>
                )}
            </div>
        );
    }

    return (
        <form
            className="contact"
            onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}
        >
            <h3>Contact</h3>

            <input
                type="tel"
                placeholder="Phone Number"
                value={info.phone}
                onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                required
                disabled={viewMode}
            />

            <input
                type="email"
                placeholder="Email"
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                required
                disabled={viewMode}
            />

            <input
                type="url"
                placeholder="Github"
                value={info.github}
                onChange={(e) => setInfo({ ...info, github: e.target.value })}
                required
                disabled={viewMode}
            />

            <input
                type="url"
                placeholder="LinkedIn"
                value={info.linkedin}
                onChange={(e) => setInfo({ ...info, linkedin: e.target.value })}
                required
                disabled={viewMode}
            />

            {!viewMode && (
                <button type="submit">
                    Save
                </button>
            )}
        </form>
    );
}

export default Contact;