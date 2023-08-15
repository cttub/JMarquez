import React, { Component } from 'react';
import './home.css';
import Fade from 'react-reveal/Fade';
import lilyImg from '../../Assets/Lilys/After/1.jpeg';
import {Link} from 'react-router-dom';
import logo from '../../Assets/Logos/circular.png';

class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id='landing' className='bg-opaque'>
                  <Link className='link-logo' 
                                            onClick={() => {
                                                        document.querySelector("html").scrollTo(0,0);
                                                        }}
                                            to = "/"> <img width={"120px"} src ={logo}/>
                 </Link>
                <section>
                    <div className='img col-lg-5'>
                        <img className='shadow' width={"100%"} src={lilyImg}/>
                        <p>Lily’s Play N Stay</p>
                    </div>
                    <Fade duration ={1400}><div className='info col-lg-6'>
                        <div>
                            <h2 className ="blue-txt">Redefining construction, reimagining spaces</h2>
                            <h1>Marquez Construction Inc</h1>
                            
                            <p>Transforming your ideas into reality, our construction team is dedicated to exceeding your aspirations.</p>
                            <Link 
                                                    onClick={() => {
                                                                document.querySelector("html").scrollTo(0,0);
                                                                }}
                                                    to = "/Contact"> <button className='orange-btn'>Contact Us</button>
                            </Link>
                            
                        </div>
                    </div></Fade>
                    
                   <button className='blue-btn call-cta'><a href='tel:+9132753090'>Call Us</a></button>



                </section>
            </div>

        );
    }
}
 
export default Landing;