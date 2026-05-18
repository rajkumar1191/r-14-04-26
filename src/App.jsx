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
// import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Unauth from "./components/Unauth";
import RoleRoute from "./routes/RoleRoute";
import Admin from "./components/Admin";
import { lazy, Suspense } from "react";
import Parent from "./components/Parent";

const LoginPage = lazy(() => import("./components/Login"));

const App = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/unauthorized" element={<Unauth />} />
          <Route
            path="/admin"
            element={
              <RoleRoute allowedRoles={["admin"]}>
                <Admin />
              </RoleRoute>
            }
          />
          <Route path='/parent' element={<Parent />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="contacts" element={<Contact />} />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
