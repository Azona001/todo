import React, { useState } from "react";
import TodoEdit from "./TodoEdit";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const TodoShow = ({todo, removeTodo, changeTodo }) => {
   const [showEdit, setShowEdit] = useState(false);
   const handleDelete = (e) => {
    removeTodo(todo.id);
   };

   const handleEdit = (e) => {
    setShowEdit(true);
   };

   const handleDblClick = (e) => {
    changeTodo(todo.id, todo.title, !todo.completed);
   };

   const handleSubmit = (id, title) => {
    changeTodo(id, title);
    setShowEdit(false);
   };

   if (showEdit) {
    return (
      <li className="todo">
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      </li>
    );
  }
  return (
    <li className="todo" onDoubleClick={handleDblClick}>
      <p className={todo.completed && 'completed'}>{todo.title}</p>
  
      <div className="actions">
        <button onClick={handleDelete}>
        <MdDelete />
        </button>
        <button onClick={handleEdit}>
        <FaRegEdit />
        </button>
      </div>
    </li>
  );
};

export default TodoShow;