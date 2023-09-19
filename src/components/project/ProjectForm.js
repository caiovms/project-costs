import { useState, useEffect } from 'react'

import Input from '../from/Input'
import Select from '../from/Select'
import SubmitButton from '../from/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {

    const [categories, setCategories] = useState([])

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

    return (
        <form className={styles.form}>
          <Input
            type="text"
            text="Project Name"
            name="name"
            placeholder="Insert project name"
          />
          <Input
            type="number"
            text="Project budget"
            name="budget"
            placeholder="Insert total budget"
          />
          <Select
            name="category_id"
            text="Select category"
            options={categories}
          />
          <SubmitButton text={btnText} />
        </form>
      )
    }

export default ProjectForm