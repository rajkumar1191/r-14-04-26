import { useCallback, useMemo, useReducer, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Profile from "./Profile";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [todos, dispatch] = useReducer(todoReducer, []);
  const { id } = useParams();

  const complexCalculation = (num) => {
    console.log("Performing complex calculation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i * num;
    }
    return result;
  };

  const result = useMemo(() => complexCalculation(10), []);

  // const result = complexCalculation(10);
  // console.log("Complex calculation result:", result);

  // const { state } = useLocation();
  // const [searchParams] = useSearchParams();

  // console.log(
  //   "TodoApp rendered with id:",
  //   id,
  //   "and state:",
  //   state,
  //   "and search params:",
  //   Object.fromEntries(searchParams.entries()),
  // );
  const handleAdd = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  // const handleClick = () => {
  //   console.log("Button clicked!");
  // };

  return (
    <div>
      <h3>Todo App {id}</h3>
      <h5>Complex Calculation Result: {result}</h5>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task name"
      />
      <button onClick={handleAdd}>Add Task</button>
      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            >
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>

            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Profile onClick={handleClick} />
    </div>
  );
};

export default TodoApp;
