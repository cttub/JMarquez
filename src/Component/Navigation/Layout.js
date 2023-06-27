import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
import Navigation from './Navigation';
import LandingNav from './LandingNav';
import './nav.css';
class Layout extends Component {
    state = {  } 
    render() { 
        return (
            <div style={{position: "absolute"}}>
                  <div id='regular-nav'><Navigation/></div>
                  <div id='landing-nav'><LandingNav/></div>
                  <Outlet />

            </div>

        );
    }
}
 
export default Layout;