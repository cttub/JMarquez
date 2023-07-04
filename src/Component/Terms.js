import React, { Component } from 'react';
import Footer from './Footer';
class Terms extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div id="terms">
            <h1 style={{borderBottom: "solid 2px", marginBottom: "20px"}}>Terms of Use</h1>
            
            <h2>Ownership and Use of Assets</h2>
            <p>We, Markitfly, have the rights to use the <a href='https://thenounproject.com/' target='_blank'><u>Noun Project Icons</u></a>, which are included in our paid yearly membership.</p>
            <p>All images representing Marquez's work used on this website are owned by our client, Marquez Construction.</p>
            <p>We have a paid subscription to Freepik for stock imagery, and we also use free stock images from Pexels.</p>
            <p>Additionally, we own any fonts used on this website under a webfont license and desktop license.</p>
            <br></br>
            <h2>Disclaimer</h2>
            <p>The information provided on this website is for general purposes only. We do not guarantee the accuracy, completeness, or reliability of the content.</p>
            <p>We reserve the right to modify or discontinue any aspect of this website without notice.</p>
            <br></br>
            <h2>Limitation of Liability</h2>
            <p>We shall not be held liable for any direct, indirect, incidental, consequential, or exemplary damages resulting from the use or inability to use the website or its content.</p>
            <br></br>
            <h2>Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of your jurisdiction.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions or concerns regarding these terms, please contact us at [email protected]</p>
    </div>
    <Footer/>
    </>
        );
    }
}
 
export default Terms;