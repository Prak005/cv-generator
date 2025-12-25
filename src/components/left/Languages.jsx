import React, {useState} from 'react';

function Languages(){
    const [submitted, setSubmitted] = useState(false);
    const [languages, setLanguages] = useState(['']);

    function addLanguage(){
        setLanguages([...languages, ''])
    }
    function updateLanguages(index, value){
        const copy = [...languages];
        copy[index] = value;
        setLanguages(copy);
    }
    function removeLanguages(index){
        setLanguages(languages.filter((_,i) => i!==index));
    }

    if(submitted){
        return(
            <div className="languages">
                <h3>Languages</h3>
                <ul>
                    {languages.filter(l => l.trim() !== '').map((lang,i) => (
                        <li  key={i}>{lang}</li>
                    ))}
                </ul>
                <button onClick={() => setSubmitted(false)}>Edit Languages</button>
            </div>
        );
    }

    return(
        <form className="languages" onSubmit={(e) => {e.preventDefault(); setSubmitted(true)}}>
            <h3>Languages</h3>
            {languages.map((lang,i) => (
                <div key={i}>
                    <input type="text" placeholder="language" value={lang} onChange={(e) => updateLanguages(i, e.target.value)}/>
                    <button type="button" onClick={() => removeLanguages(i)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={addLanguage}>Add Language</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default Languages;