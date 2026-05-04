import { api } from "./axios";

export const getUsers = () => api.get("/users1");
export const createUser = (userData) => api.post("/users", userData);
export const getUserById = (id) => api.get(`/users/${id}`);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);


export const getPosts = () => api.get("/posts");