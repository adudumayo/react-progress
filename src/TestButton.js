import { useState } from 'react';

function TestButton() {
    const [showForm, setShowForm] = useState(false);
    const [hideForm, setHideForm] = useState(false);

    const [projectName, setProjectName] = useState("");
    const [projectMgr, setProjectMgr] = useState("");
    const [projectStatus, setProjectStatus] = useState("Not Started");
    const [deadline, setDeadline] = useState("");

    const formDisplayer = () => {
        setShowForm(true);
    }

    const formHider = () => {
        setShowForm(false);
        setHideForm(true)
    }

    return (
        <div id="buttons">
            <button id="testButton" onClick={formDisplayer}>Add Project</button>

            {showForm && (<form onSubmit={formHider}>
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
            </form>)
            }

            {hideForm && (
                <div id='projects'>
                    <div className="project">
                        <div className="projectName">{projectName}</div>
                        <div className="projectMgr">{projectMgr}</div>
                        <div className="projectStatus">{projectStatus}</div>
                        <div className="deadline">{deadline}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TestButton;