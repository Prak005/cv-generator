import React, {useState} from 'react';

function Education(){
    const [submitted, setSubmitted] = useState(false);
    const [education, setEducation] = useState([
        {
            from:'',
            to:'',
            institute:'',
            course:'',
            cgpa:''
        }
    ]);

    function updateEducation(index, updatedEdu){
        const copy = [...education];
        copy[index] = updatedEdu;
        setEducation(copy);
    }

    function addEducation(){
        setEducation([...education, {from:'', to:'', institute:'', course:'', cgpa:''}]);
    }

    function removeEducation(index){
        setEducation(education.filter((_,i) => i!==index));
    }

    if(submitted){
        return(
            <div className="education">
                <h3>Education</h3>
                {education.map((edu,i) => (
                    <div key={i}>
                        <p>
                            {edu.from && <strong>{edu.from} - </strong>}<strong>{edu.to}</strong>
                        </p>
                        <p><strong>{edu.institute}</strong></p>
                        <ul>
                            {edu.course && <li>{edu.course}</li>}
                            {edu.cgpa && <li>{edu.cgpa}</li>}
                        </ul>
                    </div>
                ))}
                <button onClick={() => setSubmitted(false)}>Edit Education</button>
            </div>
        );
    }

    return(
        <form className="education" onSubmit={(e) => {e.preventDefault(); setSubmitted(true)}}>
            <h3>Education</h3>
            {education.map((edu,i) => (
                <div key={i}>
                    <input type="number" placeholder="Start Year" value={edu.from} onChange={(e) => updateEducation(i, {...edu, from:e.target.value})}/>
                    <input type="number" placeholder="End Year" value={edu.to} onChange={(e) => updateEducation(i, {...edu, to:e.target.value})}/>
                    <input type="text" placeholder="Institute" value={edu.institute} onChange={(e) => updateEducation(i, {...edu, institute:e.target.value})}/>
                    <input type="text" placeholder="Course / Degree" value={edu.course} onChange={(e) => updateEducation(i, {...edu, course:e.target.value})}/>
                    <input type="text" placeholder="CGPA" value={edu.cgpa} onChange={(e) => updateEducation(i, {...edu, cgpa:e.target.value})}/>
                    <button type="button" onClick={() => removeEducation(i)}>Remove Education</button>
                </div>
            ))}
            <button type="button" onClick={addEducation}>Add Education</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default Education;