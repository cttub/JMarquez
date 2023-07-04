import React, { Component } from 'react';
import ServiceBanner from './Service/ServiceBanner'; 
import Cards from './Service/Cards';
import { Link } from 'react-router-dom';
import OtherServices from './Service/OtherServices';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
class Services extends Component {
  state = {
    showBackToTop: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const showBackToTop = scrollPosition > 500; // Show the button after scrolling 500px down
    this.setState({ showBackToTop });
  }

  handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() { 
    const { showBackToTop } = this.state;
    
    return (
      <div id='services'>
        <ServiceBanner/>
        <div className='breadcrumbs'>
          <p>
            <span>
              <Link className='navLink logo' onClick={this.handleScrollToTop} to="/">
                Homepage /
              </Link>
            </span>{" "}
            Services
          </p>
          <h2>General Contracting, Residential or Commercial Properties</h2>
        </div>
        
        <Cards/>
        <OtherServices/>
        
        {showBackToTop && (
          <Fade><button className="backToTopButton" onClick={this.handleScrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button></Fade>
        )}
        
        <Footer/>
      </div>
    );
  }
}
 
export default Services;
