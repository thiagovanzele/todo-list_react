import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <li>
      <span>{task.id}</span>
      <button onClick={onDelete}>Remover</button>
    </li>
  );
};

export default Task;
