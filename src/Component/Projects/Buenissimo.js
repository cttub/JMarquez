
import React, { Component } from 'react';
import one from '../../Assets/Buenissimo/1.png';
import two from '../../Assets/Buenissimo/2.png';
import three from '../../Assets/Buenissimo/3.png';
import four from '../../Assets/Buenissimo/4.png';
import Fade from 'react-reveal/Fade';
class Buenissimo extends Component {
    state = {  } 
    render() { 
        return (
            <div id='project-gallery'>

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
                    <p className='title'>Buenissimo Paleteria Vi-Vi</p>
                    <p>Short Description</p>
                </div>

            </div>

        );
    }
}
 
export default Buenissimo;