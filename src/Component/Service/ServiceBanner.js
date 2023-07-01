import React, { Component } from 'react';
import './service.css';
import {Link} from 'react-router-dom';
class ServiceBanner extends Component {
    state = {  } 
    render() { 
        return (
            <div className='service-banner'>
                <div className='col-lg-6'>
                    <topheading className = "orange-txt">See our Services</topheading>
                    <heading>Redefining construction</heading>
                    <p>Our construction company offers a wide range of services to cater to your specific needs. From new construction projects that bring your vision to life with unwavering craftsmanship to remodeling services 
                        that breathe new life into outdated structures, we excel in creating exceptional spaces.</p>
                        
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
 
export default ServiceBanner;