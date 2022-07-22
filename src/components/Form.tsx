import React from 'react'
import { v4 as uuid } from 'uuid'
import { FormProps } from '../interfaces/interfaces'

const Form = ({ text, setText, todos, setTodos }: FormProps) => {

    const handleOnChangeInput = (event: { target: HTMLInputElement }): void => {
        setText(event.target.value)
    }

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        setTodos([...todos, { id: uuid(), title: text, completed: false, onEdit: false }])
        setText("")
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <input type="text" placeholder='Enter a Todo ...' className='task-input'
                value={text} required onChange={handleOnChangeInput}
            />
            <button className='button-add' type='submit'>
                Add
            </button>
        </form>
    )
}

export default Form