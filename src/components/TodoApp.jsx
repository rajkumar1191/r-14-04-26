import { useReducer, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

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
  const [todos, dispatch] = useReducer(todoReducer, []);
  const { id } = useParams();
  const {state} = useLocation();
  const [searchParams] = useSearchParams();

  console.log("TodoApp rendered with id:", id, "and state:", state, "and search params:", Object.fromEntries(searchParams.entries()));
  const handleAdd = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <div>
      <h3>Todo App {id}</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task name"
      />
      <button onClick={handleAdd}>Add Task</button>

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
    </div>
  );
};

export default TodoApp;
