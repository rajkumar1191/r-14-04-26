import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddTask from "./components/AddTask";
import TodoApp from "./components/TodoApp";
import TodoAppRHF from "./components/TodoAppRHF";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Unauth from "./components/Unauth";
import RoleRoute from "./routes/RoleRoute";
import Admin from "./components/Admin";

const App = () => {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-task"
          element={
            <ProtectedRoute>
              <AddTask />
            </ProtectedRoute>
          }
        />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/todo-app/:id" element={<TodoApp />} />
        <Route path="/todo-app-rhf" element={<TodoAppRHF />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauth />} />
        <Route path="/admin" element={
          <RoleRoute allowedRoles={['admin']}>
            <Admin />
          </RoleRoute>
        } />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="contacts" element={<Contact />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
