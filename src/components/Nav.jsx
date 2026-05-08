// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import "./Nav.css";
import styles from "./Nav.module.css";
import Button from "@mui/material/Button";
import { useAuth } from "../hooks/auth";
import { useAuthV2 } from "../hooks/authV2";

const Nav = () => {
  const isAuthenticated = sessionStorage.getItem("isLoggedIn") === "true";

  const { user, logout } = useAuth();
  const { logoutv2 } = useAuthV2();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate("/add-task");
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        marginBottom: "20px",
        justifyContent: "space-between",
      }}
      className={styles.nav}
    >
      <Link
        to="/"
        className={!isAuthenticated ? styles.inactiveLink : styles.activeLink}
      >
        Home
      </Link>
      <Link
        to="/add-task"
        className={!isAuthenticated ? styles.inactiveLink : styles.activeLink}
      >
        Add Task
      </Link>
      {isAuthenticated && (
        <Link to="/todo-app" className={styles.activeLink}>
          Todo App
        </Link>
      )}
      <Link
        to="/todo-app-rhf"
        className={!isAuthenticated ? styles.inactiveLink : styles.activeLink}
      >
        Todo App RHF
      </Link>
      <Link
        to="/dashboard"
        className={!isAuthenticated ? styles.inactiveLink : styles.activeLink}
      >
        Dashboard
      </Link>
      <Link
        to="/admin"
        className={!isAuthenticated ? styles.inactiveLink : styles.activeLink}
      >
        Admin
      </Link>
      {user && (
        <Button variant="contained" color="warning" onClick={logout}>
          Logout
        </Button>
      )}
      {user && (
        <Button variant="contained" color="warning" onClick={logoutv2}>
          Logout
        </Button>
      )}
    </nav>
  );
};

export default Nav;
