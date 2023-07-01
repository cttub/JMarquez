import React, { Component } from 'react';
import logo from '../../Assets/Logos/circular.png'
import {Link} from 'react-router-dom';
class LandingNav extends Component {
    state = {  } 
    render() { 
        return (
            <div id='landing-navigation' style={{position: "absolute", zIndex: "9999"}}>
               
               <div>
                        <div className='bar'>    
                            <Link className='link-logo navLink'
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
                        </div>
                    </div>
    
            </div>
        );
    }
}
 
export default LandingNav;