import React, { useState } from 'react';

function Education() {
    const [submitted, setSubmitted] = useState(false);
    const [edu, setEdu] = useState({school: '', title: '', date: ''});

    if(submitted){
        return(
            <div className="section-result">
                <h3>Education</h3>
                <p><strong>{edu.school}</strong> - {edu.title}</p>
                <p>Graduated: {edu.date}</p>
                <button className="edit-btn" onClick={() => setSubmitted(false)}>Edit Education</button>
            </div>
        );
    }
    return(
        <form className="cv-creation" onSubmit={() => setSubmitted(true)}>
            <h3>Education</h3>
            <input type="text" placeholder="School Name" value={edu.school} onChange={(e) => setEdu({...edu, school:e.target.value})}/>
            <input type="text" placeholder="Title of Study" value={edu.title} onChange={(e) => setEdu({...edu, title:e.target.value})}/>
            <input type="text" placeholder="Date of Study" value={edu.date} onChange={(e) => setEdu({...edu, date:e.target.value})}/>
            <button type="submit">Save</button>
        </form>
    );
}

export default Education;