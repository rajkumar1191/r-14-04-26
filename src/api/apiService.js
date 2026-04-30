import { api } from "./axios";

export const getUsers = () => api.get("/users");
export const getPosts = () => api.get("/posts");