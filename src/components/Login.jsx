import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { useState } from "react";
import { useAuthV2 } from "../hooks/authV2";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { loginv2 } = useAuthV2();
  const handleLogin = () => {
    login({ name: "John Doe" });
    loginv2(email, password);
    sessionStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
