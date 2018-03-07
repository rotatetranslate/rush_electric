import React from 'react'

// google maps api key 

const Contact = () => (
  <div className="contact container" style={{display: 'flex', alignItems: 'center', margin: '50px 100px', border: '1px solid black'}}>

    <div className="form" style={{flex: '1', border: '1px solid black'}}>
      Contact Form
    </div>

    <div className="map" style={{flex: '1', border: '1px solid black', height: '500px'}}>
      <iframe
        style={{width: '100%', height: '100%'}}
        src="https://www.google.com/maps/embed/v1/place?key=
          &q=Rush+Electric,South+El+Monte+CA" allowfullscreen>
      </iframe>
    </div>

  </div>
)

export default Contact
