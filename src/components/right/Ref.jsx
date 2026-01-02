import React, { useState } from 'react';
import References from './Reference';

function Ref({ viewMode }) {
    const [showRef, setShowRef] = useState(false);

    if (showRef) {
        return (
            <div className="ref">
                <References viewMode={viewMode} />

                {!viewMode && (
                    <button
                        type="button"
                        onClick={() => setShowRef(false)}
                    >
                        Remove References
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className="ref">
            {!viewMode && (
                <button
                    type="button"
                    onClick={() => setShowRef(true)}
                >
                    Add References
                </button>
            )}
        </div>
    );
}

export default Ref;