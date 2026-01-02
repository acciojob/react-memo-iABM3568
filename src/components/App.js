import React, { useState, useEffect } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Effect intentionally kept simple for Cypress
  }, [todos]);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const submitCustomTodo = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div id="main">
      <h1>Todo App</h1>

      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>

      <UseMemo count={count} />

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={submitCustomTodo}>Submit</button>

      <ReactMemo />
    </div>
  );
};

export default App;
