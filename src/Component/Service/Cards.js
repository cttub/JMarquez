import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class Cards extends Component {
    state = {  } 
    render() { 
        return (
            <div className='service-cards'>

                <Fade duration = {1500}><div className='service-block construction'>
                    <div className='service-desc col-lg-7'>
                        <heading>New Construction</heading>
                        <p style={{borderTop: "solid black 1px", paddingTop: "15px"}}>Our new construction services create exceptional spaces that stand the test of time. 
                            With a keen eye for design and unwavering commitment to quality, we bring your vision to life flawlessly. From residential homes to commercial complexes, we blend innovation, functionality, and sustainability to exceed expectations. With our expertise, your new construction project becomes a testament to our craftsmanship and your dreams realized.</p>
                    </div>
                </div></Fade>

                <Fade duration = {1500}><div className='service-block remodel'>
                    <div className='service-desc col-lg-7'>
                        <heading>Remodeling</heading>
                        <p style={{borderTop: "solid black 1px", paddingTop: "15px"}}>Revitalize your space with our remodeling services. Whether residential or commercial, our skilled team specializes in breathing new life into outdated structures. We work closely with you, offering innovative solutions that optimize functionality and enhance aesthetics. With attention to detail and quality craftsmanship, we create an environment that reflects your style and meets your evolving needs.</p>
                    </div>
                </div></Fade>

                <Fade duration = {1500}><div className='service-block additions'>
                    <div className='service-desc col-lg-7'>
                        <heading>Additions</heading>
                        <p style={{borderTop: "solid black 1px", paddingTop: "15px"}}>With a focus on cohesive design and optimal functionality, our skilled professionals integrate new additions into your existing structure. Whether it's adding a room, extending a workspace, or creating a relaxation area, our craftsmen deliver seamless extensions that harmonize with your existing structure. We handle every aspect, from permits to precise construction execution, ensuring a smooth and stress-free experience for you.</p>
                    </div>
                </div></Fade>

                <Fade duration = {1500}><div className='service-block tennet'>
                    <div className='service-desc col-lg-7'>
                        <heading>Tenant Finish</heading>
                        <p style={{borderTop: "solid black 1px", paddingTop: "15px"}}>We excel in transforming empty shells into vibrant workplaces tailored to your needs. Whether it's a retail outlet, office space, or a restaurant, we maximize your space's potential. From layout planning to interior design, we optimize functionality and flow, reflecting your brand identity. With our turnkey tenant finish services, your space comes to life, enabling your business to thrive.</p>
                    </div>
                </div></Fade>



            </div>
            
        );
    }
}
 
export default Cards;