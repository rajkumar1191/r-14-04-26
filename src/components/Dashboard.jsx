import { Outlet, Link } from "react-router-dom";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./Users";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
      });
  }, []);
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* {userData.length > 0 ? (
        <div>
          <h2>User Data:</h2>
          <div className="user-container">
            {userData.map((user) => (
              <div className="user-data" key={user.id}>
                <h5>Name: {user.name}</h5>
                <h5>Email: {user.email}</h5>
                <h6>Phone: {user.phone}</h6>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )} */}
      <Users />
      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/contacts">Contacts</Link>
      </nav>
      {postData.length > 0 ? (
        <div>
          <h2>Post Data:</h2>
          <div className="user-container">
            {postData.slice(0, 5).map((post) => (
              <div className="user-data" key={post.id}>
                <h5>Title: {post.title}</h5>
                <h5>Body: {post.body}</h5>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading post data...</p>
      )}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
