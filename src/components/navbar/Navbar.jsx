import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
  return (
    <header id="header">
        <nav className="navbar navbar-expand-sm navbar-light  pt-4">
            <div className="container">
                <Link to="/" >
                    <button className="navbar-brand btn-primary p-1" >Narantyo</button>   
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item px-2 fw-normal text-end">
                        <a href="#our_service" className="btn">Our Service</a>
                    </li>
                    <li className="nav-item px-2 fw-normal text-end">
                        <a href="#why_us" className="btn">Why Us</a>
                    </li>
                    <li className="nav-item px-2 fw-normal text-end">
                        <a href="#testimoni" className="btn">Testimonial</a>
                    </li>
                    <li className="nav-item px-2 fw-normal text-end">
                        <a href="#faq" className="btn">FAQ</a>
                    </li>
                    <div className="justify-content-center text-end">
                        <Link to= "/register" >
                            <button type="button" className="btn btn-success">Register</button>
                        </Link>
                    </div>
                    </ul>
                </div>
                <Sidebar />
            </div> 
        </nav>
    </header>
  )
}

export default Navbar;