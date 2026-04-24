import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ onAddTask }) => {
  const inputRef = useRef(null);
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("AddTask component mounted");
  }, []);

  useEffect(() => {
    const handleScroll = () => console.log(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (taskName.trim()) {
      console.log("AddTask component mounted");
    }
  }, [taskName, error]);

  const handleInputChange = (event) => {
    console.log("Input changed:", event.target.value, inputRef?.current);
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!taskName.trim()) {
      console.log("Task name is empty. Please enter a valid task name.");
      setError("Task name cannot be empty.");
      inputRef?.current?.focus();
      return;
    }
    console.log(inputRef.current.value)
    onAddTask(taskName);
    setTaskName("");
    setError(null);
  };

  const handleNavigation = (timestamp) => {
    navigate(`/todo-app/${timestamp}?user=raj&location=home`, { state: { from: "AddTask" } });
  }

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
          ref={inputRef}
        />
        <button type="submit">Add Task</button>
      </form>

      <button onClick={() => handleNavigation(Date.now())}>Navigate</button>
    </div>
  );
};

export default AddTask;
