import React, { Component } from 'react';

class Form extends Component {
  componentDidMount() {
    var script = document.createElement("script");
    script.id = "ff-script";
    script.src = "https://formfacade.com/include/102368871124872976069/form/1FAIpQLSeyF2oO7IEb3Os34ooUGzBtUX6e4h9RGqnla_Mo3NgDGDhHTw/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
        <div id='form'> 
            <div id="ff-compose" className='col-lg-6'>   
            </div>

        </div>
    );
  }
}

export default Form;
