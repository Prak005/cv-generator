import React, { useState } from 'react';

function References({ viewMode }) {
    const [submitted, setSubmitted] = useState(false);
    const [references, setReferences] = useState([
        {
            name: '',
            role: '',
            company: '',
            phone: '',
            email: ''
        }
    ]);

    function updateReference(index, updateRef) {
        const copy = [...references];
        copy[index] = updateRef;
        setReferences(copy);
    }

    function addReference() {
        setReferences([
            ...references,
            { name: '', role: '', company: '', phone: '', email: '' }
        ]);
    }

    function removeReference(index) {
        setReferences(references.filter((_, i) => i !== index));
    }

    if (submitted) {
        return (
            <div className="references">
                <h3>References</h3>

                {references.map((ref, i) => (
                    <div key={i}>
                        <strong>{ref.name}</strong>
                        <p>
                            {ref.role}
                            {ref.company && `, ${ref.company}`}
                        </p>
                        <p>{ref.phone}</p>
                        <p>{ref.email}</p>
                    </div>
                ))}

                {!viewMode && (
                    <button onClick={() => setSubmitted(false)}>
                        Edit References
                    </button>
                )}
            </div>
        );
    }

    return (
        <form
            className="references"
            onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}
        >
            <h3>References</h3>

            {references.map((ref, i) => (
                <div key={i}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={ref.name}
                        onChange={(e) =>
                            updateReference(i, {
                                ...ref,
                                name: e.target.value
                            })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="text"
                        placeholder="Role / Position"
                        value={ref.role}
                        onChange={(e) =>
                            updateReference(i, {
                                ...ref,
                                role: e.target.value
                            })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="text"
                        placeholder="Company"
                        value={ref.company}
                        onChange={(e) =>
                            updateReference(i, {
                                ...ref,
                                company: e.target.value
                            })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="tel"
                        placeholder="Phone"
                        value={ref.phone}
                        onChange={(e) =>
                            updateReference(i, {
                                ...ref,
                                phone: e.target.value
                            })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={ref.email}
                        onChange={(e) =>
                            updateReference(i, {
                                ...ref,
                                email: e.target.value
                            })
                        }
                        disabled={viewMode}
                    />

                    {!viewMode && (
                        <button
                            type="button"
                            onClick={() => removeReference(i)}
                        >
                            Remove Reference
                        </button>
                    )}
                </div>
            ))}

            {!viewMode && (
                <>
                    <button type="button" onClick={addReference}>
                        Add Reference
                    </button>
                    <button type="submit">
                        Save
                    </button>
                </>
            )}
        </form>
    );
}

export default References;