import React, { useState } from 'react';

function Education({ viewMode }) {
    const [submitted, setSubmitted] = useState(false);
    const [education, setEducation] = useState([
        {
            from: '',
            to: '',
            institute: '',
            course: '',
            cgpa: ''
        }
    ]);

    function updateEducation(index, updatedEdu) {
        const copy = [...education];
        copy[index] = updatedEdu;
        setEducation(copy);
    }

    function addEducation() {
        setEducation([
            ...education,
            { from: '', to: '', institute: '', course: '', cgpa: '' }
        ]);
    }

    function removeEducation(index) {
        setEducation(education.filter((_, i) => i !== index));
    }

    if (submitted) {
        return (
            <div className="education">
                <h3>Education</h3>

                {education.map((edu, i) => (
                    <div key={i}>
                        <ul>
                            <li>
                                {edu.from && `${edu.from} - `}
                                {edu.to}
                                <p>{edu.institute}</p>
                                <p>{edu.course} • {edu.cgpa}</p>
                            </li>
                        </ul>
                    </div>
                ))}

                {!viewMode && (
                    <button onClick={() => setSubmitted(false)}>
                        Edit Education
                    </button>
                )}
            </div>
        );
    }

    return (
        <form
            className="education"
            onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}
        >
            <h3>Education</h3>

            {education.map((edu, i) => (
                <div key={i}>
                    <input
                        type="number"
                        placeholder="Start Year"
                        value={edu.from}
                        onChange={(e) =>
                            updateEducation(i, { ...edu, from: e.target.value })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="number"
                        placeholder="End Year"
                        value={edu.to}
                        onChange={(e) =>
                            updateEducation(i, { ...edu, to: e.target.value })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="text"
                        placeholder="Institute"
                        value={edu.institute}
                        onChange={(e) =>
                            updateEducation(i, { ...edu, institute: e.target.value })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="text"
                        placeholder="Course / Degree"
                        value={edu.course}
                        onChange={(e) =>
                            updateEducation(i, { ...edu, course: e.target.value })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="text"
                        placeholder="CGPA"
                        value={edu.cgpa}
                        onChange={(e) =>
                            updateEducation(i, { ...edu, cgpa: e.target.value })
                        }
                        disabled={viewMode}
                    />

                    {!viewMode && (
                        <button
                            type="button"
                            onClick={() => removeEducation(i)}
                        >
                            Remove Education
                        </button>
                    )}
                </div>
            ))}

            {!viewMode && (
                <>
                    <button type="button" onClick={addEducation}>
                        Add Education
                    </button>
                    <button type="submit">
                        Save
                    </button>
                </>
            )}
        </form>
    );
}

export default Education;