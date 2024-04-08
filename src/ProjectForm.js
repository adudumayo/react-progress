import { useState } from 'react';

function ProjectForm() {
    const [projectName, setProjectName] = useState("");
    const [projectMgr, setProjectMgr] = useState("");
    const [projectStatus, setProjectStatus] = useState("Not Started");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The project is called: ${projectName}`);
        alert(`${projectMgr} is the project manager of ${projectName}`);
        alert(`The project status is ${projectStatus}`);
        alert(`The project is due on ${deadline}`);
    }

    return (
        <form onSubmit={handleSubmit}>  
            <label>Project Name:
                <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
            </label>
            <br></br>
            <label>Project Manager:
                <input
                    type="text"
                    value={projectMgr}
                    onChange={(e) => setProjectMgr(e.target.value)}
                />
            </label>
            <br></br>
            <label>Enter proj status:
                <input
                    type="text"
                    value={projectStatus}
                    onChange={(e) => setProjectStatus(e.target.value)}
                />
            </label>
            <br></br>
            <label>Due Date:
                <input
                    type="text"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default ProjectForm;