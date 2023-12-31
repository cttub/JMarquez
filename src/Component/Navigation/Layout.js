import React, { Component } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import LandingNav from './LandingNav';
import './nav.css';
import MobileNav from './MobileNav';

function Layout() {
  const location = useLocation();

  return (
    <div style={{ position: 'absolute' }}>
      <div id='mobile-nav'><MobileNav/></div>
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
