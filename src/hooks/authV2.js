import { useContext } from "react";
import { AuthContextV2 } from "../context/AuthContextV2";

export const useAuthV2 = () => useContext(AuthContextV2);