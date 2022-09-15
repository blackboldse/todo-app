import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodo] = useState(['Take a walk with dog'])
  return (
    <div className="App">
    <h1>How to create TODO app with Firebase 🔥</h1>
    <input value={setTodo} />
    <button onclick = {todos}>Add todo</button>

    <ul>
      <li></li>
    </ul>
    </div>
  );
}q

export default App;
