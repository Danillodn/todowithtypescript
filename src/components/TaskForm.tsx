import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

// CSS
import styles from './TaskForm.module.css'

type Props = {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficult, setDifficult] = useState<number>(0);

    const addTaskHandler = () => {

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title") {
            setTitle(e.target.value);
        } else {
            setDifficult(parseInt(e.target.value));
        }
        console.log(title);
        console.log(difficult);
    };

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Titulo: </label>
                <input type="text" name="title" placeholder="Titulo da Tarefa" onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficult">Dificuldade: </label>
                <input type="text" name='difficult' placeholder='Dificuldade da tarefa' onChange={handleChange} />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm