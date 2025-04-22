import React, {useState} from 'react';
import TodoList from './component/TodoList';
import TodoCreate from './component/TodoCreate';
import './App.css';

const [todos, setTodos] = useState([]);

const createTodo = (title) => {
    const newTodo = {id: crypto.randomUUID(), title: title, completed:false };
    const updateTodo = [...todos, newTodo];
    setTodos(updateTodo);

};

const removeTodo = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo);
};

const App = () => {
    return (
        <main className= "main">
            <h1> React Todo<span> Streamline Your Day, the React Way</span>
            </h1>
            <TodoList />
            <TodoCreate />

        </main>
    );
};

export default App;