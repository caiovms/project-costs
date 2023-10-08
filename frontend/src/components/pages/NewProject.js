import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import { useNavigate } from 'react-router-dom'

function NewProject() {

    const navigate = useNavigate()

    function createProject(project){

        fetch('http://localhost:8000/api/projects', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then(() => {
            navigate('/projects', {message: 'Project created successfully'})
        })
        .catch((err => console.log(err)))        
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your project to add services later</p>
            <ProjectForm handleSubmit={createProject} btnText='Create Project'/>
        </div>
    )
}

export default NewProject