import { useEffect, useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("AddTask component mounted");
  }, []);

  useEffect(() => {
    if(taskName.trim()) {
      console.log("AddTask component mounted");
    }
  }, [taskName, error]);

  const handleInputChange = (event) => {
    console.log("Input changed:", event.target.value);
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!taskName.trim()) {
      console.log("Task name is empty. Please enter a valid task name.");
      setError("Task name cannot be empty.");
      return;
    }
    onAddTask(taskName);
    setTaskName("");
    setError(null);
  };

  return (
    <div className="add-task">
      <h2>Add New Task</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Name"
          name="taskName"
          onChange={handleInputChange}
          value={taskName}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
