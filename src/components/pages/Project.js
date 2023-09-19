import { useLocation } from 'react-router-dom'

import Container from '../layout/Container'
import Message from "../layout/Message"
import LinkButton from '../layout/LinkButton'

import styles from './Project.module.css'

function Project() {

    const location = useLocation()

    let message = ''

    if(location.state){
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>My Projects</h1>
                <LinkButton to='/newproject' text='Create Project'></LinkButton>
            </div>
            {message && <Message msg={message} type='success'/>}
            <Container customClass="start">
                <p>Projects...</p>
            </Container>
        </div>
    )
}

export default Project