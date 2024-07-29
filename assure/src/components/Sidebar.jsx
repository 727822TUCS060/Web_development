import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <nav>
        <ul>
          <li><Link to="/admin-dashboard">Dashboard</Link></li>
          <li><Link to="/plans">Plans</Link></li>
          <li><Link to="/updates">Updates</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <div className="logout">
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
