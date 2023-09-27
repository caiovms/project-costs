import styles from '../project/ProjectCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

function ProjectServiceCard({id, name, budget, description, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, budget)
    }

    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Total Cost:</span> U${budget}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill/>Remove
                </button>
            </div>
        </div>
    )
}

export default ProjectServiceCard