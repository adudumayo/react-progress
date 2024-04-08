import ProjectManager from "./ProjectManager";

function ProjectForm() {
    const clickableFunction = () => {
        alert("I hope this works");
    }

    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                />
                <button id="submit" onClick={clickableFunction}>submit</button>
            </label>
        </form>
    )
};

export default ProjectForm;