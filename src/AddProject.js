import React, { useState } from 'react';

function AddProject() {
    const [showForm, setShowForm] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projectMgr, setProjectMgr] = useState('');
    const [projectStatus, setProjectStatus] = useState('Not Started');
    const [deadline, setDeadline] = useState('');
    const [projects, setProjects] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Create a new project object with the form data
        const newProject = {
            projectName,
            projectMgr,
            projectStatus,
            deadline
        };
        // Add the new project to the projects array
        setProjects([...projects, newProject]);

        setProjectName('');
        setProjectMgr('');
        setProjectStatus('Not Started');
        setDeadline('');
        setShowForm(false);
    };

    return (
        <div id="buttons">
            <button id="testButton" onClick={() => setShowForm(true)}>Add Project</button>

            {showForm && (
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Project Name:
                        <input
                            type="text"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Project Manager:
                        <input
                            type="text"
                            value={projectMgr}
                            onChange={(e) => setProjectMgr(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Project Status:
                        <input
                            type="text"
                            value={projectStatus}
                            onChange={(e) => setProjectStatus(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Due Date:
                        <input
                            type="text"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            )}

            {projects.length > 0 && (
                <div id="projects">
                    <h2>Projects:</h2>
                    {projects.map((project, index) => (
                        <div key={index} className="project">
                            <div className="projectName">{project.projectName}</div>
                            <div className="projectMgr">{project.projectMgr}</div>
                            <div className="projectStatus">{project.projectStatus}</div>
                            <div className="deadline">{project.deadline}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AddProject;
