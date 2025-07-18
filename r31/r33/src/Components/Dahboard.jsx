import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to="profile">Profile</Link> |{" "}
      <Link to="settings">Settings</Link>
    </nav>
    <Outlet />
  </div>
);
export default Dashboard;
