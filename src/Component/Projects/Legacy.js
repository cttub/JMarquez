
import React, { Component } from 'react';
import one from '../../Assets/Legacy/1.JPG';
import two from '../../Assets/Legacy/2.JPG';
import three from '../../Assets/Legacy/3.JPG';
import four from '../../Assets/Legacy/4.JPG';
import five from '../../Assets/Legacy/5.JPG';
import six from '../../Assets/Legacy/6.JPG';
import Fade from 'react-reveal/Fade';
class Legacy extends Component {
    state = {  } 
    render() { 
        return (
            <div id='project-gallery'>

                <div className='project-card'>
                    <div>
                        <Fade>
                        <img src={one}/>
                        <img src={three}/>
                        <img src={four}/>
                        <img src={five}/>
                        <img src={six}/>
                        </Fade>
                      </div>

                </div>
                <div className='bottom-title'>
                    <p className='title'>Legacy Liquor</p>
                    <p>Short Description</p>
                </div>

            </div>

        );
    }
}
 
export default Legacy;