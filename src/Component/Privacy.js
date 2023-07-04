import React, { Component } from 'react';
import Footer from './Footer';
class Privacy extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div id="privacy">
                <h1 style={{borderBottom: "solid 2px", marginBottom: "20px", paddingBottom: "10px"}}>Privacy Policy</h1>
                <br></br>
                <h2>Collection of Personal Information</h2>
                <p>We may collect personal information, such as names, email addresses, and phone numbers, when users voluntarily provide it to us. This information is used solely for the purpose of communication and providing requested services.</p>
                <br></br>
                <h2>Use of Personal Information</h2>
                <p>We may use the personal information provided by users to:</p>
                <ul>
                    <li>Respond to inquiries and provide customer support</li>
                    <li>Send periodic emails and newsletters</li>
                    <li>Notify users about updates, promotions, and special offers</li>
                </ul>
                <p>We will not share, sell, or disclose users' personal information to third parties unless required by law or with the user's explicit consent.</p>
                <br></br>
                <h2>Use of Cookies</h2>
                <p>We use cookies to enhance the user experience on our website. Cookies are small text files stored on a user's device that track and store information about their preferences. Users can control and delete cookies through their browser settings.</p>
                <br></br>
                <h2>Third-Party Tracking</h2>
                <p>We may use third-party services, such as Google Ads, to track conversions and improve the effectiveness of our advertising campaigns. These services may collect anonymous information about users' visits to our website and interaction with our ads.</p>
                <br></br>
                <h2>Data Security</h2>
                <p>We take reasonable measures to protect users' personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                <br></br>
                <h2>Changes to the Privacy Policy</h2>
                <p>We reserve the right to update or modify this Privacy Policy at any time. Users will be notified of any changes through a prominent notice on our website.</p>
                <br></br>
                <h2>Contact Us</h2>
                <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href='mailto:support@markitfly.com'><b>support@markitfly.com</b></a></p>
        </div>
        <Footer/>
        </>
        
        );
    }
}
 
export default Privacy;