import React, { Component } from 'react';

class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <topheading>Top Heading</topheading>
                <heading>Heading</heading>
                <subtitle>Subtitle</subtitle>
                <p>Paragraph this is a Paragraph</p>
                <smalltxt>Small Txt</smalltxt>
                <button>Button</button>
                <button className='white-btn'>Button</button>
                <a className='navLink' href='#'>Links</a>
                
                
            </div>

        );
    }
}
 
export default Homepage;