import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

function AdminSidebar({ sidebarClosed }) {
  const location = useLocation();

  return (
    <aside className={`welcome-page-sidebar fixed top-0 left-0 h-screen bg-white-800 text-white transition-all duration-300 ${sidebarClosed ? 'w-16' : 'w-30'}`}>
      <br /><br /><br />
      <ul className="sidebar-nav">
        <li>
          <Link to="/WelcomePage" className={location.pathname === '/WelcomePage' ? 'active' : ''}>
            <FontAwesomeIcon icon={faChartBar} size="lg" />
            <span className={`${sidebarClosed ? 'hidden' : 'ml-2'}`}>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/BookingInfo" className={location.pathname === '/BookingInfo' ? 'active' : ''}>
            <FontAwesomeIcon icon={faChartBar} size="lg" />
            <span className={`${sidebarClosed ? 'hidden' : 'ml-2'}`}>BookingInfo</span>
          </Link>
        </li>
        <li>
          <Link to="/ManageTrains" className={location.pathname === '/ManageTrains' ? 'active' : ''}>
            <FontAwesomeIcon icon={faChartBar} size="lg" />
            <span className={`${sidebarClosed ? 'hidden' : 'ml-2'}`}>Manage <br />Trains</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default AdminSidebar;
