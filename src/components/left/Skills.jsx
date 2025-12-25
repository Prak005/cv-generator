import React, {useState} from 'react';

function Skills(){
    const [submitted, setSubmitted] = useState(false);
    const [skills, setSkills] = useState(['']);

    function addSkill(){
        setSkills([...skills, '']);
    }

    function updateSkill(index, value){
        const copy = [...skills];
        copy[index] = value;
        setSkills(copy);
    }

    function removeSkill(index){
        setSkills(skills.filter((_,i) => i !== index));
    }

    if(submitted){
        return(
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    {skills
                        .filter(s => s.trim() !== '')
                        .map((skill, i) => (
                            <li key={i}>{skill}</li>
                        ))}
                </ul>
                <button onClick={() => setSubmitted(false)}>Edit Skills</button>
            </div>
        );
    }

    return(
        <form className="skills" onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}}>
            <h3>Skills</h3>
            {skills.map((skill,i) => (
                <div key={i}>
                    <input type="text" placeholder="Skill" value={skill} onChange={(e) => updateSkill(i, e.target.value)}/>
                    <button type="button" onClick={() => removeSkill(i)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={addSkill}>Add Skill</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default Skills;