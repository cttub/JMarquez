import React, { Component } from 'react';

class WhatWeDo extends Component {
    state = {  } 
    render() { 
        return (
            <div id='what-we-do'>
                <section>

                    <heading style = {{marginBottom: "30px"}}>What We Do</heading>
                    <div className='service-container' style={{marginBottom: "50px"}}>
                            <div className='residential col-lg-3 container'>
                            <div className='icon'></div>
                                <div className='txt'>
                                    <topheading>Residential Properties</topheading>
                                    <smalltxt>From kitchen enhancements to bathroom revamps and spacious extensions, 
                                        our construction experts flawlessly execute your residential projects.</smalltxt>
                                </div>
                            </div>
                            <div className='contracting col-lg-3 container'> 
                                <div className='icon'></div>
                                <div className='txt'>
                                    <topheading>General Contracting</topheading>
                                    <smalltxt>With a commitment to quality, efficiency, and customer satisfaction, 
                                        we ensure a smooth and successful construction process from start to finish</smalltxt>
                                </div>
                            </div>
                            <div className='commercial col-lg-3 container'>
                                <div className='icon'></div>
                                <div className='txt'>
                                    <topheading>Commercial Properties</topheading>
                                    <smalltxt>From office renovations to retail build-outs and complete commercial construction, 
                                        we deliver outstanding results that meet your business needs.</smalltxt>
                                </div>             
                            </div>
                    </div>
                    <button className='services-cta'>See our Services</button>
                   

                </section>

            </div>
        );
    }
}
 
export default WhatWeDo;