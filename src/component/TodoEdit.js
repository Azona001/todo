import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";


const TodoEdit = ({ todo, onSubmit }) => {
  const [title, setTitle] = useState(todo.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form className="todo-edit">
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
      <FaCheck />
      </button>
    </form>
  );
};

export default TodoEdit;