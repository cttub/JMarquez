
import React, { Component } from 'react';
import one from '../../Assets/Oil/1.jpg';
import two from '../../Assets/Oil/2.jpg';
import three from '../../Assets/Oil/3.jpg';
import four from '../../Assets/Oil/4.jpg';
import Fade from 'react-reveal/Fade';
class Oil extends Component {
    state = {  } 
    render() { 
        return (
            <div id='project-gallery'>
                <div className='top-title'>
                    <p className='title'>5 Oil Change</p>
                    <p>Lansing, Kansas</p>
                </div>
                <div className='project-card'>
                    <div>
                        <Fade>
                        <img src={one}/>
                        <img src={two}/>
                        <img src={three}/>
                        <img src={four}/>
                        </Fade>
                      </div>

                </div>
                <div className='bottom-title'>
                    <p className='title'>5 Oil Change in Lansing</p>
                    <p>Lansing, Kansas</p>
                </div>

            </div>

        );
    }
}
 
export default Oil;