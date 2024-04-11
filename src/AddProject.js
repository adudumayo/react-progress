import React, { useState } from 'react';

function AddProject() {
    const [showForm, setShowForm] = useState(false);
    const [showFirstAddButton, setShowFirstAddButton] = useState(true);
    const [projectName, setProjectName] = useState('');
    const [projectMgr, setProjectMgr] = useState('');
    const [projectStatus, setProjectStatus] = useState('Not Started');
    const [deadline, setDeadline] = useState('TBC');
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
            {showFirstAddButton && (<button id="primaryAddProject" onClick={() => { setShowForm(true); setShowFirstAddButton(false);}}>Add Project</button>)}

            {showForm && (
                <form onSubmit={handleFormSubmit} className="project-form">
                    <div className="form-group">
                        <label htmlFor="projectName">Project Name:</label>
                        <input
                            type="text"
                            id="projectName"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectMgr">Project Manager:</label>
                        <input
                            type="text"
                            id="projectMgr"
                            value={projectMgr}
                            onChange={(e) => setProjectMgr(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectStatus">Project Status:</label>
                        <input
                            type="text"
                            id="projectStatus"
                            value={projectStatus}
                            onChange={(e) => setProjectStatus(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="deadline">Due Date:</label>
                        <input
                            type="text"
                            id="deadline"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="add-button" onClick={() => { setShowFirstAddButton(true) }}>Add Project</button>
                </form>
            )}

            {projects.length > 0 && (
                <div id="projects" className="project-list">
                    <h2>Projects:</h2>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-detail">
                                <span className="detail-label">Project Name:</span>
                                <span className="detail-value">{project.projectName}</span>
                            </div>
                            <div className="project-detail">
                                <span className="detail-label">Project Manager:</span>
                                <span className="detail-value">{project.projectMgr}</span>
                            </div>
                            <div className="project-detail">
                                <span className="detail-label">Project Status:</span>
                                <span className="detail-value">{project.projectStatus}</span>
                            </div>
                            <div className="project-detail">
                                <span className="detail-label">Due Date:</span>
                                <span className="detail-value">{project.deadline}</span>
                            </div>
                        </div>
                    ))}
                </div>

            )}
        </div>
    );
}

export default AddProject;
