const TaskList = ({ title, taskList }) => {
    
  return (
    <>
      <div>
        <h2>{title}</h2>
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;

//parent('raj') -> child -> child -> child -> TaskList -> Task -> TaskDetails(''Raj's Task Details)