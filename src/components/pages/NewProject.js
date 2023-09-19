import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import { useHistory } from 'react-router-dom'

function NewProject() {

    const history = useHistory()

    function createPost(project){

        //initialize const and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            history.push('/projects', {message: 'Project created successfully'})
        })
        .catch((err => console.log(err)))        
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your project to add services later.</p>
            <ProjectForm handleSubmit={createPost} btnText='Create Project'/>
        </div>
    )
}

export default NewProject