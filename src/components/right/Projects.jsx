import React, { useState } from 'react';

function Projects({ viewMode }) {
    const [submitted, setSubmitted] = useState(false);
    const [project, setProject] = useState([
        {
            name: '',
            desc: '',
            link: '',
            live: ''
        }
    ]);

    function updateProject(index, updated) {
        const copy = [...project];
        copy[index] = updated;
        setProject(copy);
    }

    function addProject() {
        setProject([
            ...project,
            { name: '', desc: '', link: '', live: '' }
        ]);
    }

    function removeProject(index) {
        setProject(project.filter((_, i) => i !== index));
    }

    if (submitted) {
        return (
            <div className="projects">
                <h3>Projects</h3>

                {project.map((p, i) => (
                    <div key={i}>
                        <strong>{p.name}</strong>
                        <p>{p.desc}</p>

                        {p.link && (
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {p.link.replace(/^https?:\/\//, '')}
                            </a>
                        )}

                        <span>Live: </span>{p.live && (
                            <a
                                href={p.live}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {p.live.replace(/^https?:\/\//, '')}
                            </a>
                        )}
                    </div>
                ))}

                {!viewMode && (
                    <button
                        className="edit-btn"
                        onClick={() => setSubmitted(false)}
                    >
                        Edit Projects
                    </button>
                )}
            </div>
        );
    }

    return (
        <form
            className="projects"
            onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}
        >
            <h3>Projects</h3>

            {project.map((p, i) => (
                <div key={i}>
                    <input
                        type="text"
                        placeholder="Project Name"
                        value={p.name}
                        onChange={(e) =>
                            updateProject(i, {
                                ...p,
                                name: e.target.value
                            })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="text"
                        placeholder="Project Description"
                        value={p.desc}
                        onChange={(e) =>
                            updateProject(i, {
                                ...p,
                                desc: e.target.value
                            })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="url"
                        placeholder="Project Link"
                        value={p.link}
                        onChange={(e) =>
                            updateProject(i, {
                                ...p,
                                link: e.target.value
                            })
                        }
                        disabled={viewMode}
                    />

                    <input
                        type="url"
                        placeholder="Live Demo URL"
                        value={p.live}
                        onChange={(e) =>
                            updateProject(i, {
                                ...p,
                                live: e.target.value
                            })
                        }
                        disabled={viewMode}
                    />

                    {!viewMode && (
                        <button
                            type="button"
                            onClick={() => removeProject(i)}
                        >
                            Remove Project
                        </button>
                    )}
                </div>
            ))}

            {!viewMode && (
                <>
                    <button type="button" onClick={addProject}>
                        Add Project
                    </button>
                    <button type="submit">
                        Save
                    </button>
                </>
            )}
        </form>
    );
}

export default Projects;