import React, { useState } from 'react';

function GeneralInfo() {
    const [submitted, setSubmitted] = useState(false);
    const [info, setInfo] = useState({ name:'', email:'', phone:''});
    
    function handleChange(e){
        const {name, value} = e.target;
        setInfo({...info, [name]:value});
    }
    if(submitted){
        return (
            <div className="section-result">
                <h2>{info.name}</h2>
                <p>Email: {info.email} | Phone: {info.phone}</p>
                <button className="edit-btn" onclick={() => setSubmitted(false)}>Edit Info</button>
            </div>
        );
    }
    return(
        <form className="cv-section" onSubmit={() => setSubmitted(true)}>
            <h3>General Information</h3>
            <input type="text" name="name" placeholder="Name" value={info.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={info.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" value={info.phone} onChange={handleChange} required />
            <button type="submit">Save</button>
        </form>
    );
}

export default GeneralInfo;