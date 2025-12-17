import React, { useState } from 'react';
function Experience() {
    const [submitted, setSubmitted] = useState(false);
    const [exp, setExp] = useState({ company:'', position:'', tasks:'', from:'', until:''});
    
    if(submitted){
        return(
            <div className="section-result">
                <h3>Practical Experience</h3>
                <p><strong>{exp.position}</strong> at {exp.company}</p>
                <p>{exp.from} to {exp.until}</p>
                <p>Main Responsibilities: {exp.tasks}</p>
                <button className="edit-btn" onClick={() => setSubmitted(false)}>Edit Experience</button>
            </div>
        );
    }

    return(
        <form className="cv-section" onSubmit={() => setSubmitted(true)}>
            <h3>Work Experience</h3>
            <input type="text" placeholder="Company Name" value={exp.company} onChange={(e) => setExp({...exp, company: e.target.value})}/>
            <input type="text" placeholder="Position Title" value={exp.position} onChange={(e) => setExp({...exp, position: e.target.value})}/>
            <input type="text" placeholder="Main Responsibilities" value={exp.tasks} onChange={(e) => setExp({...exp, tasks: e.target.value})}/>
            <div className="date-group">
                <input type="text" placeholder="From (MM/YYYY)" value={exp.from} onChange={(e) => setExp({from: e.target.value})}/>
                <input type="text" placeholder="To (MM/YYYY)" value={exp.until} onChange={(e) => setExp({...exp, until: e.target.value})}/>
            </div>
            <button type="submit">Save</button>
        </form>
    );
}

export default Experience;