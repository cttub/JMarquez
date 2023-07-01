import React, { Component } from 'react';
import './Projects/project.css';
import {Link} from 'react-router-dom';
class Projects extends Component {
    state = {  } 
    render() { 
        return (
            <div className='project-banner'>
                <div className='col-lg-6'>
                    <topheading className = "orange-txt">See our Projects</topheading>
                    <heading>Quality craftsmanship that inspires.</heading>
                    <p>Explore a captivating showcase of our completed works, each embodying our commitment to quality, innovation, and superior craftsmanship. 
                        Immerse yourself in the stunning visuals that highlight our expertise in transforming ideas into reality. </p>
                        
                        <Link
                                                                onClick={() => {
                                                                            document.querySelector("html").scrollTo(0,0);
                                                                            }}
                                                                to = "/Contact"> <button className='blue-btn'>Contact Us</button>
                        </Link>

                </div>

        </div>
        );
    }
}
 
export default Projects;