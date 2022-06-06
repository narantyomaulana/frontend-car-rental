import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container mt-5" id="contact">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <p>
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p>
                binarcarrental@gmail.com
              </p>
              <p>
                081-233-334-808
              </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a className="text-decoration-none text-reset" href="#our_service">
                    Our services
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-decoration-none text-reset" href="#why_us">
                    Why Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-decoration-none text-reset" href="#testimoni">
                    Testimonial
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-decoration-none text-reset" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <p>
                Connect with us
              </p>
              <p> 
                <a href="#">
                  <img src="OwlCarousel 2/img/icon_facebook.png" alt="" />
                </a>
                <a href="#"  style={{ marginLeft:"10px" }}>
                  <img src="OwlCarousel 2/img/icon_instagram.png" alt="" />
                </a>
                <a href="#" style={{ marginLeft:"10px" }}>
                  <img src="OwlCarousel 2/img/icon_twitter.png" alt="" />
                </a>
                <a href="#"style={{ marginLeft:"10px" }}>
                  <img src="OwlCarousel 2/img/icon_mail.png" alt="" />
                </a>
                <a href="#"style={{ marginLeft:"10px" }}>
                  <img src="OwlCarousel 2/img/icon_twitch.png" alt="" />
                </a>
              </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <p>
                Copyright Binar 2022
              </p>
              <a className="btn btn-primary" href="#" role="button">
                LOGO
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
