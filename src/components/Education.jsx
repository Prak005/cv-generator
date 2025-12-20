import React, {useState} from 'react';

function Education(){
    const [submitted, setSubmitted] = useState(false);
    const [edu, setEdu] = useState({from:'', to:'', name:'', course:'', gpa:''});
    if(submitted){
        return (
            <div className="education">
                <h3>Education</h3>
                <p><strong>{edu.from} - {edu.to}</strong></p>
                <p><strong>{edu.name}</strong></p>
                <ul>
                    <li>{edu.course}</li>
                    <li>{edu.gpa}/4.0</li>
                </ul>
                <button className="edit-btn" onClick={() => setSubmitted(false)}>Edit Education</button>
            </div>
        );
    }

    return(
        <form className="education" onSubmit={() => setSubmitted(true)}>
            <h3>Education</h3>
            <input type="number" placeholder="Start Year" value={edu.from} onChange={(e) => setEdu({...edu, from:e.target.value})}/>
            <input type="number" placeholder="End Year" value={edu.to} onChange={(e) => setEdu({...edu, to:e.target.value})}/>
            <input type="text" placeholder="Institute Name" value={edu.name} onChange={(e) => setEdu({...edu, name: e.target.vaue})}/>
            <input type="number" placeholder="Enter GPA" value={edu.gpa} onChange={(e) => setEdu({...edu, gpa:e.target.value})}/>
            <button type="submit">Save</button>
        </form>
    )
}

export default Education;