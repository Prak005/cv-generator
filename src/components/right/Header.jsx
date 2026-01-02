import React, { useState } from 'react';

function Header({ viewMode }) {
    const [submitted, setSubmitted] = useState(false);
    const [info, setInfo] = useState({
        name: '',
        position: ''
    });

    if (submitted) {
        return (
            <div className="header">
                <h1>{info.name}</h1>
                <h2>{info.position}</h2>

                {!viewMode && (
                    <button
                        className="edit-btn"
                        onClick={() => setSubmitted(false)}
                    >
                        Edit
                    </button>
                )}
            </div>
        );
    }

    return (
        <form
            className="header"
            onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}
        >
            <input
                type="text"
                placeholder="Name"
                value={info.name}
                onChange={(e) =>
                    setInfo({ ...info, name: e.target.value })
                }
                required
                disabled={viewMode}
            />

            <input
                type="text"
                placeholder="Position"
                value={info.position}
                onChange={(e) =>
                    setInfo({ ...info, position: e.target.value })
                }
                required
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

export default Header;