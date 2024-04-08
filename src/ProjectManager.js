import React, { useState } from 'react';

const ProjectManager = () => {
    const [projects, setProjects] = useState([]);

    const handleAddProject = () => {
        const newProject = {
            projectName: `New Project ${projects.length + 1}`,
            projectMgr: 'New Manager',
            projectStatus: 'Not Started',
            deadline: 'DD/MM/YYYY'
        };

        setProjects([...projects, newProject]);
    };

    return (
        <div>
            <div id="buttons">
                <button id="addProject" onClick={handleAddProject}>
                    Add Project
                </button>
            </div>

            <main>
                <div id="projects">
                    {/* Render existing projects */}
                    {projects.map((project, index) => (
                        <div key={index} className="project">
                            <div className="projectName">{project.projectName}</div>
                            <div className="projectMgr">{project.projectMgr}</div>
                            <div className="projectStatus">{project.projectStatus}</div>
                            <div className="deadline">{project.deadline}</div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProjectManager;
