import React, { Component } from 'react';
import { Outlet } from "react-router-dom";
import Navigation from './Navigation';
class Layout extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                  <div id='regular-nav'><Navigation/></div>
                  <Outlet />

            </div>

        );
    }
}
 
export default Layout;