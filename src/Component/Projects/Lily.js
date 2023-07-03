import React, { Component } from 'react';
import one from '../../Assets/Lilys/After/1.jpeg';
import two from '../../Assets/Lilys/After/2.jpeg';
import three from '../../Assets/Lilys/After/3.jpeg';
import four from '../../Assets/Lilys/After/4.jpeg';
import five from '../../Assets/Lilys/After/5.jpeg';
import six from '../../Assets/Lilys/After/6.jpeg';
import seven from '../../Assets/Lilys/After/7.jpeg';


import Fade from 'react-reveal/Fade';
class Lily extends Component {
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
                        <img src={five}/>
                        <img src={six}/>
                        <img src={seven}/>
                        </Fade>
                      </div>

                </div>
                <div className='bottom-title'>
                    <p className='title'>Lily's Play-N-Stay</p>
                    <p>Short Description</p>
                </div>

            </div>
        );
    }
}
 
export default Lily;