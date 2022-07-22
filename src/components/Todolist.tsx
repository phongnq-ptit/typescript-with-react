import React from 'react'
import { ITodo, ITodoList } from '../interfaces/interfaces'

const Todolist = ({ todos, setTodos, textEdit, setTextEdit }: ITodoList) => {

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
        const findTodo = todos.find((item: ITodo) => item.id === todo.id)
        console.log(333312122222222, findTodo, todos, todo)
        setTextEdit(findTodo as ITodo)
    }

    return (
        <div>
            {
                todos.map((item: ITodo, index: number) => {
                    return (
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
                    )
                })
            }
        </div>
    )
}

export default Todolist