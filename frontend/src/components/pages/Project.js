import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Project.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ProjectServiceForm from '../project/ProjectServiceForm'
import ProjectServiceCard from '../project/ProjectServiceCard'

function Project() {
  let { id } = useParams()
  const [project, setProject] = useState([])
  const [services, setServices] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')

  useEffect(() => {
    setTimeout(
      () =>
        fetch(`http://localhost:8000/api/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data)
            setServices(data.services)
          }),
      300,
    )
  }, [id])

  function createService(project) {
    const serviceCost = project.services[project.services.length - 1].cost
    const newCost = parseFloat(project.usedBudget) + parseFloat(serviceCost)

    if (newCost > parseFloat(project.budget)) {
      setMessage('Budget exceeded, check service value!')
      setType('error')
      project.services.pop()
      return false
    }

    project.usedBudget = newCost

    fetch(`http://localhost:8000/api/projects/${project._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // setServices(data.updatedProject.services)
        setProject(data.updatedProject)
        setShowServiceForm(!showServiceForm)
        setMessage('Service added!')
        setType('success')
      })
  }

  function removeService(id, cost) {
    const servicesUpdated = project.services.filter(
      (service) => service._id !== id,
    )

    const projectUpdated = project

    projectUpdated.services = servicesUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    fetch(`http://localhost:8000/api/projects/${projectUpdated._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated)
        setServices(servicesUpdated)
        setMessage('Service removed successfully!')
      })
  }

  function editProject(project) {

    if (project.budget < project.cost) {
      setMessage('The Budget cannot be less than the cost of the project!')
      setType('error')
      return false
    }

    fetch(`http://localhost:8000/api/projects/${project._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
        setMessage('Project Updated!')
        setType('success')
        setShowProjectForm(!showProjectForm)
        setProject({ ...project })
      })
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  console.log(project)

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Project: {project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Edit Project' : 'Close'}
              </button>
              {!showProjectForm ? (
                <div className={styles.form}>
                  <p>
                    <span>Category:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Total Budget:</span> U${project.budget}
                  </p>
                  <p>
                    <span>Used Budget:</span> U${project.usedBudget}
                  </p>
                </div>
              ) : (
                <div className={styles.form}>
                  <ProjectForm
                    handleSubmit={editProject}
                    btnText='Save'
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Add a Service</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? 'Add Service' : 'Close'}
              </button>
              <div className={styles.form}>
                {showServiceForm && (
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
                    key={service._id}
                    id={service._id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>There's no services registered.</p>}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Project