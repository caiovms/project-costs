import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ProjectServiceForm({ handleSubmit, btnText, projectData }){
    
    const [service, setService] = useState({})

    const submit = (e) => {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
      }
    

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }
    
    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type='text'
            text='Service name'
            name='name'
            placeholder='Insert service name'
            handleOnChange={handleChange}
            />
            <Input 
            type='number'
            text='Service budget'
            name='budget'
            placeholder='Insert total value'
            handleOnChange={handleChange}
            />
            <Input 
            type='text'
            text='Service description'
            name='description'
            placeholder='Describe service'
            handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectServiceForm