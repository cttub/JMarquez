import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
class Project extends Component {
    state = {  } 
    render() { 
        return (
            <div id='project-section'>
                <section>
                    <Fade left duration = {1400}><div className='col-lg-6 col-md-9 col-sm-10 get-things-done'>
                        <div>
                            <h2 className = "orange-txt">Building your vision, exceeding your expectations</h2>
                            <h1 style = {{marginBottom: "20px"}}>We get things done right</h1>
                            <p style = {{marginBottom: "20px"}}>
                                Our team interpret your ideas and aspirations, translating them into tangible structures that exceed expectations. </p>
                               
                                <Link 
                                            onClick={() => {
                                                        document.querySelector("html").scrollTo(0,0);
                                                        }}
                                            to = "/Projects"> <button className='white-btn'>See Our Projects</button>
                                </Link>
                        </div>
                        
                    </div></Fade>

                </section>

            </div>

        );
    }
}
 
export default Project;