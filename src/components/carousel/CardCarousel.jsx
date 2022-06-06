import React from "react";


const CardCarousel = () => {
    return (
      <div className="container mt-5" id="testimoni">
        <div className="item d-flex align-items-center">
          <div className="row">
            <div className="col-sm-3 py-5">
              <img src="./images/testi1.png" className="img-fluid" style={{marginLeft: '15px', marginTop: '15px', width: '90%'}} alt="" />
            </div>
            <div className="col-sm-9 ">
              <div className="star mt-3 ms-3">
                <i className="bi bi-star-fill" style={{color: "#f9cc00"}} />
                <i className="bi bi-star-fill" style={{color: "#f9cc00"}} />
                <i className="bi bi-star-fill" style={{color: "#f9cc00"}} />
                <i className="bi bi-star-fill" style={{color: "#f9cc00"}} />
                <i className="bi bi-star-fill" style={{color: "#f9cc00"}} />
              </div>
              <div className="text mt-2 mx-2 px-2">
                <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi dolorem sed, asperiores ullam quia consequuntur repellat necessitatibus, cumque consequatur culpa in dolores officiis dicta. Nulla corrupti ducimus veniam molestiae!”.</p>
                <b>John Dee 31, Bromo</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardCarousel;
  