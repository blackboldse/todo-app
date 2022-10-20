import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Add a todo get started</label>
      <input type="text" value={input} name="text" onChange={handleChange} />
      <button>Add todo</button>
    </form>
  );
}

export default TodoForm;
