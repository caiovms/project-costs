import styles from './Select.module.css'

function Select({text, name, options, hanleOnChange, value}) {
    return (
        <div className={styles.form.control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <options>Select an option</options>
            </select>
        </div>
    )
}

export default Select