import React, { useState } from 'react';
import WorkExperience from './WorkExperience';

function Work({ viewMode }) {
    const [showWork, setShowWork] = useState(false);

    if (showWork) {
        return (
            <div className="work">
                <WorkExperience viewMode={viewMode} />

                {!viewMode && (
                    <button
                        type="button"
                        onClick={() => setShowWork(false)}
                    >
                        Remove Work Experience
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className="work">
            {!viewMode && (
                <button
                    type="button"
                    onClick={() => setShowWork(true)}
                >
                    Add Work Experience
                </button>
            )}
        </div>
    );
}

export default Work;
