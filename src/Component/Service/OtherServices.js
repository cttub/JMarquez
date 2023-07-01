import React, { Component } from 'react';

class OtherServices extends Component {
    state = {  } 
    render() { 
        return (
            <div className='other-services'>
                <section>
                    <heading>Other Services</heading>
                    <topheading>Self Performing Services</topheading>
                    <section className='service-navigation'>
                      
                      <div className='col-lg-2 mini-nav-service'>
                            <ul style={{listStyle: "none", padding: "0px"}}>
                                    <li><a>Framing</a></li>
                                    <li><a>Drywall</a></li>
                                    <li><a>Painting</a></li>
                                    <li><a>Concrete</a></li>
                                    <li><a>Demolition</a></li>
                                    <li><a>Ironwork</a></li>
                                    <li><a>Ceiling</a></li>
                                    <li><a>Woodwork</a></li>
                            </ul>
                     </div>

                   
                        <div className='service-boxes'>
                                <div className='other-blocks framing' id='framing'>
                                    <div className='heading'>
                                    </div>
                                    <div className='description'>
                                        <heading>Framing (Wood & Metal)</heading>
                                        <p>Experience tailored wood and metal framing solutions for your construction needs. Our skilled craftsmen deliver sturdy frameworks that ensure structural integrity and seamless integration with the overall design. With our expertise and attention to detail, your project will not only stand the test of time but also rank high in quality and reliability.</p>
                                    </div>

                                </div>

                                <div className='other-blocks drywall' id='drywall'>
                                    <div className='heading'>
                                    </div>
                                    <div className='description'>
                                        <heading>Drywall</heading>
                                        <p>Achieve smooth and flawless walls with our professional drywall services. Our skilled experts install and finish drywall with precision, creating a polished and uniform surface. With our meticulous approach and adherence to industry standards, your drywall project will not only enhance the aesthetics but also improve search engine visibility, boosting your online presence.</p>
                                    </div>
                                </div>

                                <div className='other-blocks painting' id='painting'>
                                    <div className='heading'>
                                    </div>
                                    <div className='description'>
                                        <heading>Painting</heading>
                                        <p>Transform your spaces into visual masterpieces with our expert painting services. Our experienced painters pay meticulous attention to detail and use high-quality paints to deliver exceptional results. From color coordination to precise application techniques, we create an inviting atmosphere that not only captivates visitors but also attracts search engine attention, optimizing your online visibility.</p>
                                    </div>
                                </div>

                                <div className='other-blocks concrete' id='painting'>
                                    <div className='heading'>
                                    </div>
                                    <div className='description'>
                                        <heading>Concrete</heading>
                                        <p>Rely on our concrete services to lay a solid foundation for your construction projects. From pouring foundations to constructing driveways and retaining walls, our team combines expertise with advanced techniques, ensuring the highest level of quality and durability. With our optimized concrete solutions, your project will not only withstand the test of time but also rank well in search engine results.</p>
                                    </div>
                                </div>

                                <div className='other-blocks demolition' id='painting'>
                                    <div className='heading'>
                                    </div>
                                    <div className='description'>
                                        <heading>Demolition</heading>
                                        <p>When it's time to make way for something new, our skilled demolition team safely and efficiently dismantles structures. From careful planning to controlled demolitions and debris removal, we handle the entire process with precision and adherence to safety regulations. Our SEO-friendly demolition services ensure a clean and prepared site for future development, improving your online visibility and attracting potential clients.</p>
                                    </div>
                                </div>

                                <div className='other-blocks ironwork' id='painting'>
                                    <div className='heading'>
                                    </div>
                                    <div className='description'>
                                        <heading>Ironwork/Welding</heading>
                                        <p>Infuse strength, elegance, and search engine visibility into your structures with our ironwork and welding services. Our experienced ironworkers and welders create custom metal elements that enhance both aesthetics and functionality. With precise measurements, flawless welding, and seamless integration, we ensure your project not only stands out but also ranks high in online searches.</p>
                                    </div>
                                </div>
                                
                                <div className='other-blocks ceiling' id='painting'>
                                    <div className='heading'>
                                    </div>
                                    <div className='description'>
                                        <heading>Suspended Ceilings</heading>
                                        <p>Create visually appealing and functional spaces with our suspended ceiling services. Our expertise in installation ensures improved acoustics, enhanced lighting, and ease of maintenance. With our SEO-optimized suspended ceiling solutions, your space will not only impress visitors but also gain online visibility, attracting potential customers and clients.</p>
                                    </div>
                                </div>

                                <div className='other-blocks ceiling' id='painting'>
                                    <div className='heading'>
                                    </div>
                                    <div className='description'>
                                        <heading>Woodwork / Carpentry</heading>
                                        <p>Create visually appealing and functional spaces with our suspended ceiling services. Our expertise in installation ensures improved acoustics, enhanced lighting, and ease of maintenance. With our SEO-optimized suspended ceiling solutions, your space will not only impress visitors but also gain online visibility, attracting potential customers and clients.</p>
                                    </div>
                                </div>
                                

                        </div>



                    </section>

                </section>

            </div>

        );
    }
}
 
export default OtherServices;