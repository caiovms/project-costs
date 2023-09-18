function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insert project name"></input>
            </div>
            <div>
                <input type="number" placeholder="Insert total budget"></input>
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Select category</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create project"></input>
            </div>
        </form>
    )
}

export default ProjectForm