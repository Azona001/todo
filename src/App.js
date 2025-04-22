import React, {useState} from 'react';
import TodoList from './component/TodoList';
import TodoCreate from './component/TodoCreate';
import './App.css';



const App = () => {
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
    
    const changeTodo = (id, title, completed = false) => {
        const updateTodo = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, title, completed};
            }
            return todo;
        });
        setTodos(updateTodo);
    };

    return (
        <main className= "main">
            <h1> React Todo<span> Streamline Your Day, the React Way</span>
            </h1>
            <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo} />
            <TodoCreate createTodo={createTodo} />

        </main>
    );
};

export default App;