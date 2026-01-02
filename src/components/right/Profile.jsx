import React, { useState } from 'react';

function Profile({ viewMode }) {
    const [submitted, setSubmitted] = useState(false);
    const [profile, setProfile] = useState('');

    if (submitted) {
        return (
            <div className="profile">
                <h3>Profile</h3>
                <p>{profile}</p>

                {!viewMode && (
                    <button
                        className="edit-btn"
                        onClick={() => setSubmitted(false)}
                    >
                        Edit Profile
                    </button>
                )}
            </div>
        );
    }

    return (
        <form
            className="profile"
            onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}
        >
            <h3>Profile</h3>

            <textarea
                rows={5}
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                disabled={viewMode}
            />

            {!viewMode && (
                <button type="submit">
                    Save
                </button>
            )}
        </form>
    );
}

export default Profile;