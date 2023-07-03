import React, { Component } from 'react';
import ServiceBanner from './Service/ServiceBanner'; 
import Cards from './Service/Cards';
import {Link} from 'react-router-dom';
import OtherServices from './Service/OtherServices';
class Services extends Component {
    state = {  } 
    render() { 
        return (
            <div id='services'>
                <ServiceBanner/>
                <div className='breadcrumbs'>
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
                        Services
                    </p>
                   <h2>General Contracting, Residential or Commercial Properties</h2>

                </div>

                <Cards/>
                <OtherServices/>
            
                
            </div>

        );
    }
}
 
export default Services;