import React, { Component } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import LandingNav from './LandingNav';

import './nav.css';

function Layout() {
  const location = useLocation();

  return (
    <div style={{ position: 'absolute' }}>
      {location.pathname === '/' ? (
        <div id="landing-nav">
          <LandingNav />
        </div>
      ) : (
        <div id="regular-nav">
          <Navigation />
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Layout;
