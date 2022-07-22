import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Todolist from './components/Todolist';
import { ITodo } from './interfaces/interfaces';

function App() {

  const [text, setText] = useState<string>("")

  const [todos, setTodos] = useState<ITodo[]>([])

  const [textEdit, setTextEdit] = useState<ITodo>()

  return (
    <div className='container'>
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form text={text} setText={setText} todos={todos} setTodos={setTodos} textEdit={textEdit as ITodo} setTextEdit={setTextEdit as React.Dispatch<React.SetStateAction<ITodo>>} />
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos} textEdit={textEdit as ITodo} setTextEdit={setTextEdit as React.Dispatch<React.SetStateAction<ITodo>>} />
        </div>
      </div>
    </div>
  );
}

export default App;
