import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
class WhatWeDo extends Component {
    state = {  } 
    render() { 
        return (
            <div id='what-we-do'>
                <section>

                    <h1 style = {{marginBottom: "30px"}}>What We Do</h1>
                    <div className='service-container' style={{marginBottom: "50px"}}>
                            <Fade duration = {1500}><div className='residential col-lg-3 container'>
                            <div className='icon'></div>
                                <div className='txt'>
                                    <h2>Residential Properties</h2>
                                    <smalltxt>From kitchen enhancements to bathroom revamps and spacious extensions, 
                                        our construction experts flawlessly execute your residential projects.</smalltxt>
                                </div>
                            </div></Fade>
                            <Fade duration = {2500}> <div className='contracting col-lg-3 container'> 
                                <div className='icon'></div>
                                <div className='txt'>
                                    <h2>General Contracting</h2>
                                    <smalltxt>With a commitment to quality, efficiency, and customer satisfaction, 
                                        we ensure a smooth and successful construction process from start to finish</smalltxt>
                                </div>
                            </div></Fade>
                            <Fade duration = {3500}><div className='commercial col-lg-3 container'>
                                <div className='icon'></div>
                                <div className='txt'>
                                    <h2>Commercial Properties</h2>
                                    <smalltxt>From office renovations to retail build-outs and complete commercial construction, 
                                        we deliver outstanding results that meet your business needs.</smalltxt>
                                </div>             
                            </div></Fade>
                    </div>
                   
                    <Link 
                                            onClick={() => {
                                                        document.querySelector("html").scrollTo(0,0);
                                                        }}
                                            to = "/Services">  <button className='services-cta'>See our Services</button>
                    </Link>
                   

                </section>

            </div>
        );
    }
}
 
export default WhatWeDo;