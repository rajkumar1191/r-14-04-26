import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddTask from "./components/AddTask";
import TodoApp from "./components/TodoApp";
import TodoAppRHF from "./components/TodoAppRHF";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/todo-app/:id" element={<TodoApp />} />
        <Route path="/todo-app-rhf" element={<TodoAppRHF />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
