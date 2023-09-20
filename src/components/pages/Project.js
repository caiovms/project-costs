import styles from './Project.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project() {

    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setshowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }  
            }).then(resp => resp.json())
              .then(data => {
                setProject(data)
               })
              .catch(err => console.log(err)) 
        }, 500)
    }, [id])

    function toggleProjectForm() {
        setshowProjectForm(!showProjectForm)
    }


    return (<>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass='column'>
                    <div className={styles.details_container}>
                        <h1>Project: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Edit Project' : 'Close'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Category:</span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total Budget:</span> U${project.budget}
                                </p>
                                <p>
                                    <span>Used Budget:</span> U${project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <p>form</p>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        ):(
            <Loading/>
        )}
    </>)
}

export default Project