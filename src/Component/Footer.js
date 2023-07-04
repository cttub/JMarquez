import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../Assets/Logos/white.png';
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div id='footer'>
                
                <Link 
                                                                onClick={() => {
                                                                            document.querySelector("html").scrollTo(0,0);
                                                                            }}
                                                                to = "/TermsOfUse"> Terms of Use
                 </Link>
                 <img width={"100px"} src={logo}/>
                 <Link 
                                                                onClick={() => {
                                                                            document.querySelector("html").scrollTo(0,0);
                                                                            }}
                                                                to = "/PrivacyPolicy"> Privacy Policy
                 </Link>

            </div>
        );
    }
}
 
export default Footer;