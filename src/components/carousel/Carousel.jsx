import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CardCarousel from "./CardCarousel";

const options = {
  items: 4,
};
class Carousel extends React.Component {
  render() {
    return (
      <>
        <div
          className="container mt-3 pt-5 d-flex flex-column justify-content-center"
          id="testimonial">
          <h2 className="text-center mb-3 fw-bold pt-4">Testimonial</h2>
          <p className="text-center mb-2">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <OwlCarousel
          className="owl-theme"
          loop= {true}
          margin={10}
          autoHeight= {true}
          nav = {true}
          center={true}
          dots={false}
          navText={[
            "<img src='images/Left button.png' alt='kanan' style='height:32px; width:32px; '>",
            "<img src='images/Right button.png' alt='kanan' style='height:32px; width:32px; '>",
          ]}
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 2,
            },
          }}
        >
          <CardCarousel />
          <CardCarousel />
          <CardCarousel />
        </OwlCarousel>
      </>
    );
  }
}

export default Carousel;
