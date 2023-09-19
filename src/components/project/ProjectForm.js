import { useState, useEffect } from 'react'

import Input from '../from/Input'
import Select from '../from/Select'
import SubmitButton from '../from/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || [])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCategories(data)
          })
      }, [])

    const submit = (e) => {
      e.preventDefault()
      handleSubmit(project) 
    }

    function handleChange(e) {
       setProject({...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
      setProject({
        ...project,
        category: {
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      })
    }
  

    return (
        <form onSubmit={submit} className={styles.form}>
          <Input
            type="text"
            text="Project Name"
            name="name"
            placeholder="Insert project name"
            handleOnChange={handleChange}
            value={project.name}
          />
          <Input
            type="number"
            text="Project budget"
            name="budget"
            placeholder="Insert total budget"
            handleOnChange={handleChange}
            value={project.budget}
          />
          <Select
            name="category_id"
            text="Select category"
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
          />
          <SubmitButton text={btnText} />
        </form>
      )
    }

export default ProjectForm