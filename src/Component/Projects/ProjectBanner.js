import React, { Component } from 'react';
import './project.css';
import {Link} from 'react-router-dom';
class ProjectBanner extends Component {
    state = {  } 
    render() { 
        return (
            <div className='project-banner'>
                <div className='col-lg-6'>
                    <h2 className = "orange-txt">See our Projects</h2>
                    <h1>Quality craftsmanship that inspires.</h1>
                    <p>Explore a captivating showcase of our completed works, each embodying our commitment to quality, innovation, and superior craftsmanship.  </p>
                        
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
 
export default ProjectBanner;