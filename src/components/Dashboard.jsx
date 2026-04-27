import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/contacts">Contacts</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
