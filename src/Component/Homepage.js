import React, { Component } from 'react';
import Landing from './HomePages/Landing';
import Project from './HomePages/Project';
class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Landing/>
                <Project/>
              
            </div>

        );
    }
}
 
export default Homepage;