import React, { Component } from 'react';
import Landing from './HomePages/Landing';
import Project from './HomePages/Project';
import Reviews from './HomePages/Reviews';
import WhatWeDo from './HomePages/WhatWeDo';
import Form from './Form';
class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Landing/>
                <Project/>
                <Reviews/>
                <WhatWeDo/>
                <Form/>
              
            </div>

        );
    }
}
 
export default Homepage;