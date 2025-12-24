import React, {useState} from 'react';

function WorkExperience() {
    const [submitted, setSubmitted] = useState(false);
    const [experience, setExperience] = useState([
        {
            company: '',
            role: '',
            start: '',
            end: '',
            points: ['']
        }
    ]);

    function updateExperience(index, updatedExp){
        const copy = [...experience];
        copy[index] = updatedExp;
        setExperience(copy);
    }

    function addExperience(){
        setExperience([...experience, {company:'', role:'', start:'', end:'', points:['']}]);
    }

    function removeExperience(index){
        setExperience(experience.filter((_, i) => i!==index));
    }

    function updatePoint(expIndex, pointIndex, value){
        const copy = [...experience];
        copy[expIndex].points[pointIndex] = value;
        setExperience(copy);
    }

    function addPoint(expIndex){
        const copy = [...experience];
        copy[expIndex].points.push('');
        setExperience(copy);
    }

    function removePoint(expIndex, pointIndex){
        const copy = [...experience];
        copy[expIndex].points = copy[expIndex].points.filter(
                            (_,i) => i !== pointIndex
        );
        setExperience(copy);
    }

    if(submitted){
        return(
            <div className="work-experience">
                <h3>Work Experience</h3>
                {experience.map((exp,i) => (
                    <div key={i}>
                        <div>
                            <strong>{exp.company}</strong>
                            <span>{exp.start} - {exp.end}</span>
                        </div>
                        <p>{exp.role}</p>
                        <ul>
                            {exp.points.map((p,j) => (
                                <li key={j}>{p}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                <button onClick={() => setSubmitted(false)}>Edit Work Experience</button>
            </div>
        );
    }

    return(
        <form className="work-experience" onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}}>
            <h3>Work Experience</h3>
            {experience.map((exp, i) => (
                <div key={i}>
                    <input type="text" placeholder="Company" value={exp.company} onChange={(e) => updateExperience(i, {...exp, company:e.target.value})}/>
                    <input type="text" placeholder="Role" value={exp.role} onChange={(e) => updateExperience(i, {...exp, role:e.target.value})}/>
                    <input type="number" placeholder="Start Year" value={exp.start} onChange={(e) => updateExperience(i, {...exp, start:e.target.value})}/>
                    <input type="number" placeholder="End Year / Present" value={exp.end} onChange={(e) => updateExperience(i, {...exp, end:e.target.value})}/>
                    <h4>Responsibilities</h4>
                    {exp.points.map((point, j) => (
                        <div key={j}>
                            <input type="text" placeholder="Bullet Point" value={point} onChange={(e) => updatePoint(i, j, e.target.value)}/>
                            <button type="button" onClick={() => removePoint(i, j)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => addPoint(i)}>Add Bullet</button>
                    <button type="button" onClick={() => removeExperience(i)}>Remove Job</button>
                    <hr />
                </div>
            ))}
            <button type="button" onClick={addExperience}>Add Job</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default WorkExperience;