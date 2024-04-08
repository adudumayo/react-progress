function ProjectForm() {
    //const [name, setName] = useState("");

    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                />
                <button type="button" id="submit">submit</button>
            </label>
        </form>
    )
};

export default ProjectForm;