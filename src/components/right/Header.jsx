import React, {useState} from 'react';

function Header() {
    const [submitted, setSubmitted] = useState(false);
    const [info, setInfo] = useState({
        name:'',
        position:''
    });
    
    if(submitted){
        return(
            <div className="header">
                <h1>{info.name}</h1>
                <h2>{info.position}</h2>
                <button className="edit-btn" onClick={() => setSubmitted(false)}>Edit</button>
            </div>
        );
    }

    return(
        <form className="header" onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}}>
            <input type="text" placeholder="name" value={info.name} onChange={(e) => setInfo({...info, name:e.target.value})} required/>
            <input type="text" placeholder="position" value={info.position} onChange={(e) => setInfo({...info, position:e.target.value})} required/>
            <button type="submit">Save</button>
        </form>
    );
}

export default Header;