import { Navigate } from "react-router-dom";
import { useAuthV2 } from "../hooks/authV2";

const RoleRoute = ({ children, allowedRoles }) => {
  const { user } = useAuthV2();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleRoute;
