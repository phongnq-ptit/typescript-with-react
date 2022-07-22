import React, { useState } from 'react'
import { ITodo, ITodoList } from '../interfaces/interfaces'

const Todolist = ({ todos, setTodos }: ITodoList) => {

    const [textEdit, setTextEdit] = useState<ITodo>();

    const handleCompleted = (todo: ITodo, i: number): void => {
        const tmpTodos = todos.map((item: ITodo, index: number) => {
            if (item.id === todo.id && index === i) {
                return { ...item, completed: !item.completed }
            }
            return item
        })
        setTodos(tmpTodos as ITodo[])
    }

    const handleDelete = (todo: ITodo): void => {
        setTodos(todos.filter((item: ITodo) => item.id !== todo.id))
    }

    const handleEdit = (todo: ITodo): void => {
        setTodos(
            todos.map((item: ITodo) => {
                if (todo.id === item.id) {
                    return { ...item, onEdit: !item.onEdit }
                }

                return { ...item, onEdit: false }
            })
        )

        const findTodo = todos.find((item: ITodo) => item.id === todo.id)
        setTextEdit(findTodo)
    }

    const handleUpdate = (event: { target: HTMLInputElement }): void => {
        setTextEdit({ ...textEdit, title: event.target.value } as ITodo);
    }

    const handleResultUpdate = () => {
        setTodos(
            todos.map((item: ITodo) => {
                if (item.id === textEdit?.id) {
                    return { ...textEdit, onEdit: false }
                }

                return item
            })
        )

        setTextEdit({} as ITodo)
    }

    return (
        <div>
            {
                todos.map((item: ITodo, index: number) => {
                    return (
                        <>
                            <li className='list-item' key={index + 2}>
                                <input type="text" value={item.title} className={`list ${item.completed ? "complete" : ""}`}
                                    onChange={(event) => { event.preventDefault() }}
                                />
                                <div>
                                    <button className='button-complete task-button' onClick={() => handleCompleted(item, index)}>
                                        <i className='fa fa-check-circle' ></i>
                                    </button>
                                    <button className='button-edit task-button' onClick={() => handleEdit(item)}>
                                        <i className='fa fa-edit' ></i>
                                    </button>
                                    <button className='button-delete task-button' onClick={() => handleDelete(item)} >
                                        <i className='fa fa-trash' ></i>
                                    </button>
                                </div>
                            </li>
                            {
                                item.onEdit &&
                                <>
                                    <input type="text" value={textEdit?.title} className='input-edit' onChange={handleUpdate} />
                                    <button className='btn-update' onClick={handleResultUpdate} >Update</button>
                                </>
                            }
                        </>
                    )
                })
            }
        </div>
    )
}

export default Todolist