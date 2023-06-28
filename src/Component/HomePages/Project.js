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
                            <topheading className = "orange-txt">Building your vision, exceeding your expectations</topheading>
                            <heading style = {{marginBottom: "20px"}}>We get things done right</heading>
                            <p style = {{marginBottom: "20px"}}>From concept to completion, we bring your vision to life with unwavering craftsmanship. 
                                With a meticulous approach that begins with thorough planning and design, we carefully interpret your ideas and aspirations, translating them into tangible structures that exceed expectations. </p>
                               
                                <Link 
                                            onClick={() => {
                                                        document.querySelector("html").scrollTo(0,0);
                                                        }}
                                            to = "/"> <button className='white-btn'>See Our Projects</button>
                                </Link>
                        </div>
                        
                    </div></Fade>

                </section>

            </div>

        );
    }
}
 
export default Project;