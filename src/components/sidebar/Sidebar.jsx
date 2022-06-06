import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div id="mySidebar" className="sidebar">
            <a href="#"  className="closebtn">×</a>
            <a href="#" className="fw-bold btn">BCR</a>
            <a href="#our_service" className="btn">Our Service</a>
            <a href="#why_us" className="btn">Why Us</a>
            <a href="#testimoni" className="btn">Testimonial</a>
            <a href="#faq" className="btn">FAQ</a>
            <button type="button" className="btn btn-success" style={{marginLeft: '10px'}}>Register</button>
        </div>
        <div id="main">
            <button className="openbtn" onclick="openNav()">☰</button>
        </div>
    </div>
  
  )
}

export default Sidebar
