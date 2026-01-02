import React, { useState, useEffect } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {}, [todos]);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const submitTodo = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div id="main">
      <h1>React.useMemo</h1>

      <h2>My todos</h2>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>

      <hr />

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <UseMemo count={count} />

      <hr />

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={submitTodo}>Submit</button>

      <ReactMemo />
    </div>
  );
};

export default App;
