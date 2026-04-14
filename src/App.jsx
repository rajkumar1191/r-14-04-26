import "./App.css";
import TaskList from "./components/TaskList";

const App = () => {
  const title = "My Tasks";
  const taskList = ["Task 1", "Task 2", "Task 3"];
  return (
    <>
      <h5>Task Manager</h5>
      <TaskList title={title} taskList={taskList} />
    </>
  );
}

export default App;
