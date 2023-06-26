import React, { Component } from 'react';
import './home.css';
import Fade from 'react-reveal/Fade';
import lilyImg from '../../Assets/Lilys/After/1.jpeg';
import lilyImg2 from '../../Assets/Lilys/After/2.jpeg';
import lilyImg3 from '../../Assets/Lilys/After/3.jpeg';
import lilyImg4 from '../../Assets/Lilys/After/4.jpeg';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id='landing' className='bg-opaque'>
                <section>
                    <div className='img col-lg-5'>
                        <img className='shadow' width={"100%"} src={lilyImg}/>
                        <p>Lily’s Play N Stay</p>
                    </div>
                    <div className='info box-shadow col-lg-6'>
                        <div>
                            <topHeading className ="blue-txt">Redefining construction, reimagining spaces.</topHeading>
                            <heading>Marquez Construction Inc</heading>
                            <p>Transforming your ideas into reality, our construction team is dedicated to exceeding your aspirations.</p>
                            <button className='orange-btn'>Contact Us</button>
                        </div>
                    </div>
                    

                </section>
            </div>

        );
    }
}
 
export default Landing;