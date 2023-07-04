import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer';
class OtherServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 'framing',
    };
  }


  handleClick = (id) => {
    this.setState({ activeID: id });
  };


  render() {
    const { activeID } = this.state;


    const blocks = [
      { id: 'framing', name: 'Framing', description: 'Experience tailored wood and metal framing solutions for your construction needs. Our skilled craftsmen deliver sturdy frameworks that ensure structural integrity and seamless integration with the overall design. With our expertise and attention to detail, your project will not only stand the test of time but also rank high in quality and reliability.' },
      { id: 'drywall', name: 'Drywall',  description: 'Achieve smooth and flawless walls with our professional drywall services. Our skilled experts install and finish drywall with precision, creating a polished and uniform surface. With our meticulous approach and adherence to industry standards, your drywall project will not only enhance the aesthetics but also improve search engine visibility, boosting your online presence.' },
      { id: 'painting', name: 'Painting', description: 'Transform your spaces into visual masterpieces with our expert painting services. Our experienced painters pay meticulous attention to detail and use high-quality paints to deliver exceptional results. From color coordination to precise application techniques, we create an inviting atmosphere that not only captivates visitors but also attracts search engine attention, optimizing your online visibility.' },
      { id: 'concrete', name: 'Concrete', description: 'Rely on our concrete services to lay a solid foundation for your construction projects. From pouring foundations to constructing driveways and retaining walls, our team combines expertise with advanced techniques, ensuring the highest level of quality and durability. With our optimized concrete solutions, your project will not only withstand the test of time but also rank well in search engine results.' },
      { id: 'demolition', name: 'Demolition',description: 'When it\'s time to make way for something new, our skilled demolition team safely and efficiently dismantles structures. From careful planning to controlled demolitions and debris removal, we handle the entire process with precision and adherence to safety regulations. Our SEO-friendly demolition services ensure a clean and prepared site for future development, improving your online visibility and attracting potential clients.' },
      { id: 'ironwork', name: 'Ironwork', description: 'Infuse strength, elegance, and search engine visibility into your structures with our ironwork and welding services. Our experienced ironworkers and welders create custom metal elements that enhance both aesthetics and functionality. With precise measurements, flawless welding, and seamless integration, we ensure your project not only stands out but also ranks high in online searches.' },
      { id: 'ceiling', name: 'Ceiling', description: 'Create visually appealing and functional spaces with our suspended ceiling services. Our expertise in installation ensures improved acoustics, enhanced lighting, and ease of maintenance. With our SEO-optimized suspended ceiling solutions, your space will not only impress visitors but also gain online visibility, attracting potential customers and clients.' },
      { id: 'woodwork', name: 'Woodwork',description: 'Focus on intricate details and finishing touches with our woodwork/trim service. Our skilled craftsmen create custom wood elements that add elegance and craftsmanship to your space. With our attention to detail and SEO-friendly approach, your project will not only leave a lasting impression on visitors but also rank high in search engine results, driving more organic traffic to your website.' },
    ];


    return (
      <div className="other-services desktop">
        <section>
          <h1>Other Services</h1>
          <h2>Self Performing Services</h2>
              <section className="service-navigation">
                <div className="col-lg-2 mini-nav-service">
                  <ul style={{ listStyle: 'none', padding: '0px' }}>
                    {blocks.map((block) => (
                      <li key={block.id}>
                        <a
                          className={activeID === block.id ? 'active' : ''}
                          onClick={() => this.handleClick(block.id)}
                        >
                          {block.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>


                <div className="service-boxes">
                  <Fade>{blocks.map((block) => (
                    <div
                      className={`other-blocks ${block.id} ${
                        activeID === block.id ? 'active' : 'hidden'
                      }`}
                      id={block.id}
                      key={block.id}
                    >
                      <div className="heading"></div>
                      <div className="description">
                        <h1>{block.name}</h1>
                        <p>{block.description}</p>
                      </div>
                    </div>
                  ))}</Fade>
                </div>
              </section>



              <section className='smaller-device'>
                  <div className="service-boxes">
                    <Fade>
                      {blocks.map((block) => (
                        <div
                          className={`other-blocks ${block.id}`} id = {`${block.id}`}
                          id={block.id}
                          key={block.id}
                        >
                          <div className="heading"></div>
                          <div className="description">
                            <h1>{block.name}</h1>
                            <p>{block.description}</p>
                          </div>
                        </div>
                      ))}
                    </Fade>
                  </div>
              </section>
        </section>
        
      </div>
    );
  }
}


export default OtherServices;



