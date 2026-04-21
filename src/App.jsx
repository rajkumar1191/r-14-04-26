import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TodoApp from "./components/TodoApp";
import TodoAppRHF from "./components/TodoAppRHF";

const App = () => {
  const title = "My Tasks";
  let taskList = ["Task 1", "Task 2", "Task 3"];

  //const [currentValue, updateFunction] = useState(initialValue);
  const [tasks, setTasks] = useState(taskList);

  const handleAddTask = (newTask) => {
    console.log("Adding new task:", newTask);
    // Logic to add the new task to the task list
    setTasks([...tasks, newTask]);
    console.log("Updated task list:", tasks);
  }

  return (
    <>
      <h5>Task Manager</h5>
      <AddTask onAddTask={handleAddTask} />
      <TaskList title={title} taskList={tasks} />

      <TodoApp />

      <TodoAppRHF />
    </>
  );
}

export default App;
