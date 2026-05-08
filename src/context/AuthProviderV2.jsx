import { useState } from "react";
import { AuthContextV2 } from "./AuthContextV2";

const AuthProviderV2 = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const loginv2 = (email, password) => {

    
    // Simulate API call
    const userData = { email, password, role: "admin" };
    const fakeResponse = {
      token: "dfertfdvfdvfdvf",
      user: userData
    };
    localStorage.setItem("token", fakeResponse.token);
    localStorage.setItem("user", JSON.stringify(fakeResponse.user));
    setUser(fakeResponse.user);
  };

  const logoutv2 = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContextV2.Provider value={{ user, loginv2, logoutv2 }}>
      {children}
    </AuthContextV2.Provider>
  );
};

export default AuthProviderV2;
