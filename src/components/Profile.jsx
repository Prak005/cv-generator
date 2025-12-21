import React, {useState} from 'react';

function Profile() {
    const [submitted, setSubmitted] = useState(false);
    const [profile, setProfile] = useState({text:''});

    if(submitted){
        return(
            <div className="profile">
                <h3>Profile</h3>
                <p>{profile.text}</p>
                <button className="edit-btn" onClick={() => setSubmitted(false)}>Edit Profile</button>
            </div>
        );
    }

    return(
        <form className="profile" onSubmit={() => setSubmitted(true)}>
            <h3>Profile</h3>
            <input type="text" value={profile.text} onChange={(e) => setProfile({text:e.target.value})}/>
            <button type="submit">Save</button>
        </form>
    );
}

export default Profile;