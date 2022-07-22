import React, { useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { FormProps, ITodo } from '../interfaces/interfaces'

const Form = ({ text, setText, todos, setTodos, textEdit, setTextEdit }: FormProps) => {

    const updateTodo = (title: string, id: string, completed: boolean): void => {
        console.log(344444, title, id, completed, todos)
        setTodos(
            todos.map((item: ITodo) => {
                return item.id === id ? { id, title, completed } : item
            })
        )

        setTextEdit({} as ITodo)
    }

    useEffect(() => {
        if (textEdit) {
            setText(textEdit.title)
        } else {
            setText("")
        }
    }, [setText, textEdit])

    const handleOnChangeInput = (event: { target: HTMLInputElement }): void => {
        console.log(99999, event.target.value)
        setText(event.target.value)
    }

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
        console.log(2222, text)
        console.log(3333, textEdit)
        event.preventDefault()
        if (!textEdit) {
            setTodos([...todos, { id: uuid(), title: text, completed: false }])
            setText("")
        } else {
            updateTodo(text, textEdit.id, textEdit.completed)
        }
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <input type="text" placeholder='Enter a Todo ...' className='task-input'
                value={text} required onChange={handleOnChangeInput}
            />
            <button className='button-add' type='submit'>
                {
                    textEdit ? 'Up' : 'Add'
                }
            </button>
        </form>
    )
}

export default Form