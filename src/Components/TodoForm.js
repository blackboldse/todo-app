import React, { useState } from "react";
import db from "../firebase";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Button, FormControl, Input, InputLabel } from "@mui/material";

function Todo() {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input !== "") {
      await setDoc(doc(collection(db, "todos")), {
        input,
        completed: false,
        timestamp: serverTimestamp(),
      });
      setInput("");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <FormControl margin="normal" sx={{ display: "flex" }}>
          <InputLabel sx={{ fontStyle: "italic" }}>
            Add a todo get started
          </InputLabel>
          <Input
            id="todo-input"
            name="todo-input"
            type="text"
            value={input}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Add Todo
          </Button>
        </FormControl>
      </form>
    </div>
  );
}

export default Todo;
