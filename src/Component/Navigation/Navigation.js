import React, { Component } from 'react';
import logo from '../../Assets/Logos/white.png';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
class Navigation extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Fade down>
                <div id='other-nav' style={{zIndex: "999"}}>
                        <div className='first'>
                                        <Link className='navLink logo'
                                                                onClick={() => {
                                                                            document.querySelector("html").scrollTo(0,0);
                                                                            }}
                                                                to = "/"> <img width={"70px"} src={logo}/>
                                        </Link>

                                        <Link className='navLink'
                                                                onClick={() => {
                                                                            document.querySelector("html").scrollTo(0,0);
                                                                            }}
                                                                to = "/Services"> Services
                                        </Link>
                                        <Link className='navLink'
                                                                onClick={() => {
                                                                            document.querySelector("html").scrollTo(0,0);
                                                                            }}
                                                                to = "/Projects"> Projects
                                        </Link>
                                        <Link className='navLink'
                                                                onClick={() => {
                                                                            document.querySelector("html").scrollTo(0,0);
                                                                            }}
                                                                to = "/Contact"> Contact
                                        </Link>
                                     
                                        <button className='white-btn call-cta' style={{display: "inline-block", position: "absolute", zIndex: "999", right: "10px", top: "10px"}}><a href='tel:+19132753090'>Call Us</a></button>
                                        


                        </div>
                    </div>
                </Fade>
                </>
     

 

        );
    }
}
 
export default Navigation;