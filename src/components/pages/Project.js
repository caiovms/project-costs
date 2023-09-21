import { parse, v4 as uuidv4 } from 'uuid'

import styles from './Project.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjecForm from '../project/ProjectForm'
import ProjectServiceForm from '../project/ProjectServiceForm'
import ProjectServiceCard from '../project/ProjectServiceCard'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project() {

    let { id } = useParams()

    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setshowProjectForm] = useState(false)
    const [showServicForm, setshowServicForm] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState()

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
                setServices(data.services)
               })
              .catch(err => console.log(err)) 
        }, 500)
    }, [id])

    function createService(project) {

        setMessage('')

        const lastService = project.services[project.services.length - 1]
        
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if(newCost > parseFloat(project.budget)){
            setMessage('Budget exceeded, check service value')
            setType('error')
            project.services.pop()
            return false
        }

        project.cost = newCost

        fetch(`http://localhost:5000/projects/${project.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)   
            }).then(resp => resp.json())
              .then(data => {
                console.log(data)
               })
              .catch(err => console.log(err))

    }

    function editPost(project) {
        
        setMessage('')

        if(project.budget < project.cost){
            setMessage('The Budget cannot be less than the project cost')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)   
            }).then(resp => resp.json())
              .then(data => {
                setProject(data)
                setshowProjectForm(false)
                setMessage('Project updated')
                setType('success')
               })
              .catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setshowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setshowServicForm(!showServicForm)
    }

    function removeService() {

    }

    return (
      <>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass='column'>
                    {message && <Message type={type} msg={message}/>}
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
                               <ProjecForm 
                                  handleSubmit={editPost} 
                                  btnText='Save' 
                                  projectData={project}>
                               </ProjecForm>
                            </div>
                        )}
                    </div>
                    <div className={styles.service_form_container}>
                        <h2>Add a Service</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServicForm ? 'Add Service' : 'Close'}
                        </button>
                        <div className={styles.project_info}>
                            {showServicForm && (
                                <ProjectServiceForm
                                    handleSubmit={createService}
                                    btnText='Add Service'
                                    projectData={project}
                                />
                            )}
                        </div>
                    </div>
                    <h2>Services</h2>
                    <Container customClass='start'>
                        {services.length > 0 &&
                            services.map((service) => (
                                <ProjectServiceCard
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}
                                />
                            ))}
                        {services.length === 0 && <p>There's no services registered.</p>}
                    </Container>
                </Container>
            </div>
        ):(
            <Loading/>
        )}
    </>)
}

export default Project