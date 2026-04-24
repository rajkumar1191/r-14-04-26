// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/add-task");
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add-task">Add Task</Link>
      <Link to="/todo-app">Todo App</Link>
      <Link to="/todo-app-rhf">Todo App RHF</Link>
    </nav>
  );

};

export default Nav;
