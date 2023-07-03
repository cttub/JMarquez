import React, { Component } from 'react';
import './Projects/project.css';
import {Link} from 'react-router-dom';
import ProjectBanner from './Projects/ProjectBanner';
import Buenissimo from './Projects/Buenissimo';
import Legacy from './Projects/Legacy';
import Lily from './Projects/Lily';
class Projects extends Component {
    state = {  } 
    render() { 
        return (
            <div id='project'>
                    <ProjectBanner/>
                <div className='project-body'>
                    <p>
                        <span>
                            <Link className='navLink logo'
                            onClick={() => {
                                document.querySelector("html").scrollTo(0,0);
                            }}
                            to="/"
                            >
                            Homepage /
                            </Link>
                        </span>{" "}
                        Projects
                    </p>

           
                    <div className='project-row'>
                        <Lily/>
                        <Legacy/>
                    </div>
                    <div className='project-row'>
                        <Buenissimo/>

                    </div>
                
                    
            

                </div>
            </div>
        );
    }
}
 
export default Projects;