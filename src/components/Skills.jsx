import React, {useState} from 'react';

function Skills(){
    const [submitted, setSubmitted] = useState(false);
    const [skills, setSkills] = useState({one:'', two:'', three:'', four:'', five:''});

    if(submitted){
        return(
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    <li>{skills.one}</li>
                    <li>{skills.two}</li>
                    <li>{skills.three}</li>
                    <li>{skills.four}</li>
                    <li>{skills.five}</li>
                </ul>
                <button className="edit-btn" onClick={() => setSubmitted(false)}>Edit Skills</button>
            </div>
        )
    };

    return(
        <form className="skills" onSubmit={() => setSubmitted(true)}>
            <h3>Skills</h3>
            <input type="text" placeholder="Skill" value={skills.one} onChange={(e) => setSkills({...skills, one:e.target.value})}/>
            <input type="text" placeholder="Skill" value={skills.two} onChange={(e) => setSkills({...skills, two:e.target.value})}/>
            <input type="text" placeholder="Skill" value={skills.three} onChange={(e) => setSkills({...skills, three:e.target.value})}/>
            <input type="text" placeholder="Skill" value={skills.four} onChange={(e) => setSkills({...skills, four:e.target.value})}/>
            <input type="text" placeholder="Skill" value={skills.five} onChange={(e) => setSkills({...skills, five:e.target.value})}/>
        </form>
    );
}

export default Skills;