import React from "react"

export interface WelcomeMessageProps {
    position: string,
    country?: string
}

export interface FormProps {
    text: string,
    setText: React.Dispatch<React.SetStateAction<string>>
    todos: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
    textEdit: ITodo,
    setTextEdit: React.Dispatch<React.SetStateAction<ITodo>>
}

export interface ITodo {
    id: string,
    title: string,
    completed: boolean
}

export interface ITodoList {
    todos: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>,
    textEdit: ITodo,
    setTextEdit: React.Dispatch<React.SetStateAction<ITodo>>
}