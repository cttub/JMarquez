import React, { Component } from 'react';
import './contact.css';
import Footer from './Footer';
class Contact extends Component {
    componentDidMount() {
        var script = document.createElement("script");
        script.id = "ff-script";
        script.src = "https://formfacade.com/include/102368871124872976069/form/1FAIpQLSeyF2oO7IEb3Os34ooUGzBtUX6e4h9RGqnla_Mo3NgDGDhHTw/classic.js?div=ff-compose";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
      }
    state = {  } 
    render() { 
        return (
            <>
            <div id='contact-us'>
                 <div id="ff-compose" className='col-lg-6 col-md-12 col-sm-12'>   
                </div>
            </div>
           
            <Footer/>
            </>
        );
    }
}
 
export default Contact;