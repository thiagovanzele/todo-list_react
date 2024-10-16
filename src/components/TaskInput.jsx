import React, { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      onAddTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button
      className={input ? "" : "disabled"}
      disabled={!input} type="submit">
        Adicionar
      </button>
    </form>
  );
};

export default TaskInput;
