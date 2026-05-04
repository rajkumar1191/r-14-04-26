import { useEffect, useState } from "react";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../api/apiService";
import { useRetryApi } from "../hooks/retryApi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { request } = useRetryApi(() => getUsers());

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await request();
      console.log("API Response:", res);
      setUsers(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreate = async () => {
    const newUser = {
      name: "New User",
      email: "newuser@example.com",
    };
    try {
      const res = await createUser(newUser);
      console.log("User created:", res);
      fetchUsers(); // Refresh the user list after creation
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  const handleUpdate = async () => {
    const updatedUser = {
      name: "Updated User",
      email: "updateduser@example.com",
    };
    try {
      const res = await updateUser(1, updatedUser); // Assuming you have a user ID to update
      console.log("User updated:", res);
      fetchUsers(); // Refresh the user list after update
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteUser(id); // Assuming you have a user ID to delete
      console.log("User deleted:", res);
      fetchUsers(); // Refresh the user list after deletion
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  const handleUserDetails = async (id) => {
    try {
      const res = await getUserById(id); // Assuming you have a user ID to get details
      console.log("User details:", res);
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Users</h1>
      <button
        style={{
          boxShadow: "0 0 5px #272727",
          borderRadius: "6px",
          padding: "0.5rem",
        }}
        onClick={handleCreate}
        disabled={loading}
      >
        Add User
      </button>

      <button
        style={{
          boxShadow: "0 0 5px #272727",
          borderRadius: "6px",
          padding: "0.5rem",
        }}
        onClick={() => request(2, 2000)} // Example of retrying the API call with custom parameters
        disabled={loading}
      >
       Retry
      </button>

      <button
        style={{
          boxShadow: "0 0 5px #272727",
          borderRadius: "6px",
          padding: "0.5rem",
          marginLeft: "0.5rem",
        }}
        onClick={handleUpdate}
        disabled={loading}
      >
        Update User
      </button>
      <button
        style={{
          boxShadow: "0 0 5px #272727",
          borderRadius: "6px",
          padding: "0.5rem",
          marginLeft: "0.5rem",
        }}
        onClick={() => handleUserDetails(1)} // Example to fetch details of user with ID 1
        disabled={loading}
      >
        Get User Details
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
              <button
                style={{
                  boxShadow: "0 0 5px #272727",
                  borderRadius: "6px",
                  padding: "0.5rem",
                  marginLeft: "0.5rem",
                }}
                onClick={() => handleDelete(user.id)}
              >
                Delete User
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
