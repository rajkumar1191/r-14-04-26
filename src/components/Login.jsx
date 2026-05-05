import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = () => {
    login({ name: "John Doe" });
    sessionStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
