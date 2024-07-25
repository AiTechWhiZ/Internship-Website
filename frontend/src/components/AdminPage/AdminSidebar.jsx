import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/AdminPanel.css';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/admin/products-upload" activeclassname="active-link">
              Upload Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/techblog-upload" activeclassname="active-link">
              Upload Tech Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
