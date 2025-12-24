import React, {useState} from 'react';

function Profile() {
    const [submitted, setSubmitted] = useState(false);
    const [profile, setProfile] = useState('');

    if(submitted){
        return(
            <div className="profile">
                <h3>Profile</h3>
                <p>{profile}</p>
                <button className="edit-btn" onClick={() => setSubmitted(false)}>Edit Profile</button>
            </div>
        );
    }

    return(
        <form className="profile" onSubmit={(e) => {setSubmitted(true); e.preventDefault();}}>
            <h3>Profile</h3>
            <textarea rows={5} value={profile} onChange={(e) => setProfile(e.target.value)}/>
            <button type="submit">Save</button>
        </form>
    );
}

export default Profile;