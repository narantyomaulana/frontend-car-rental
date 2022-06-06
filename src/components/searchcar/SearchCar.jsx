
import React from "react";

const SearchCar = ({ cars }) => {
  return (
    <div className="container mt-5">
      <div className="cars-container row">
        {cars.map((car) => (
          <div className="col-md-4 my-2" key={car.id}>
            <div className="card h-100">
              <div className="card-body">
                <img src={car.image} className="card-img" />
                <h5 className="card-title mt-3 card-title-text fw-bold">
                  {car.manufacture} or {car.model}
                </h5>
                <h5 className="card-title mt-3 card-title-text">Rp {car.rentPerDay} / hari</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rem natus maxime harum assumenda illum quibusdam quis qui facere obcaecati quod officia.
                </p>
                <h6>
                  <i className="bi bi-people" style={{ fontSize: 20 + "px" }}></i> {car.capacity} orang
                </h6>
                <h6>
                  <i className="bi bi-gear" style={{ fontSize: 20 + "px" }}></i> {car.transmission}
                </h6>
                <h6>
                  <i className="bi bi-calendar" style={{ fontSize: 20 + "px" }}></i> Tahun {car.year}
                </h6>
                <div className="d-flex flex-column mt-3 align-items-stretch">
                  <button className="btn-select-car">Pilih Mobil</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCar;