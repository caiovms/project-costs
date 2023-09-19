import Input from '../from/Input'
import Select from '../from/Select'
import SubmitButton from '../from/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                type='text' 
                text='Project Name' 
                name='name' 
                placeholder='Insert project name'
            />
            <Input 
                type='number' 
                text='Project budget' 
                name='budget' 
                placeholder='Insert total budget'
            />
            <Select 
                name='category_id' 
                text='Select category'
            />
            <SubmitButton 
                text={btnText}
            />
        </form>
    )
}

export default ProjectForm