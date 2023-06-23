import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';
import './WelcomePage.css';
import Home from './Home';

function AdminHeader({ handleLogout, sidebarClosed, toggleSidebar }) {
  return (
    <nav className={`welcome-page-header flex items-center justify-between px-4 py-3 bg-slate-900 w-full fixed top-0 z-10 ${sidebarClosed ? 'sidebar-closed' : ''}`}>
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="w-8 h-8" />
        <span className="ml-2 text-xl font-bold text-white">VEE EXPRESS</span>
      </div>
      <button
        className="toggle-sidebar-button p-2 text-xl text-white"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {sidebarClosed ? (
          <FontAwesomeIcon icon={faChevronRight} />
        ) : (
          <FontAwesomeIcon icon={faChevronLeft} />
        )}
      </button>
      <button className="logout-button px-4 py-2 text-white bg-red-500 rounded">
         <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLogout}>
            Logout
         </Link>
      </button>


    </nav>
  );
}

export default AdminHeader;
