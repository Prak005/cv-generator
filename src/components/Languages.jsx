import React, {useState} from 'react';
function Languages() {
    const [submitted, setSubmitted] = useState(false);
    const [languages, setLanguages] = useState({one:'', two:'', three:'', four:''});

    if(submitted){
        return(
            <div className="languages">
                <h3>Languages</h3>
                <ul>
                    <li>{languages.one}</li>
                    <li>{languages.two}</li>
                    <li>{languages.three}</li>
                    <li>{languages.four}</li>
                </ul>
                <button className="edit-btn" onClick={() => setSubmitted(false)}>Edit Languages</button>
            </div>
        );
    }

    return(
        <form className="languages" onSubmit={() => setSubmitted(true)}>
            <h3>Languages</h3>
            <input type="text" placeholder="Language" value={languages.one} onChange={(e) => setLanguages({...languages, one:e.target.value})}/>
            <input type="text" placeholder="Language" value={languages.two} onChange={(e) => setLanguages({...languages, two:e.target.value})}/>
            <input type="text" placeholder="Language" value={languages.three} onChange={(e) => setLanguages({...languages, three:e.target.value})}/>
            <input type="text" placeholder="Language" value={languages.four} onChange={(e) => setLanguages({...languages, four:e.target.value})}/>
            <button type="submit">Save</button>
        </form>
    )
}

export default Languages;