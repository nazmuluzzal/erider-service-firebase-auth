import React, { useState } from "react";
import { useParams } from "react-router";
import riderData from "../../riderData/riderData";
import Map from "../Map/Map";
import "./Destination.css";
import passengerImg from "../../images/peopleicon.png";

const Destination = () => {
  const { riderId } = useParams();
  const rideDetails = riderData.find((rider) => rider.id === riderId);
  const { name, image, price, passenger } = rideDetails;

  const [destination, setDestination] = useState({
    pickFrom: "",
    pickTo: "",
    
  });
  const { pickFrom, pickTo} = destination;

  const handleBlur = (event) => {
    const newDestination = { ...destination };
    newDestination[event.target.name] = event.target.value;
    setDestination(newDestination);
  };
  const handleDestination = (event) => {
    const newDestination = { ...destination };
    newDestination.isReady = true;
    setDestination(destination);
    // console.log(destination);
    event.preventDefault();
  };

  return (
    <div className="destination-container">
      <div className="row">
        <div className="search-div col-md-4">
          {pickFrom && pickTo ? (
            <div>
              <div className="destination-form ml-1 mb-2 bg-primary text-white rounded p-3">
                <ul>
                  <li>
                    <h3>{destination.pickFrom}</h3>
                  </li>
                  <li>
                    <h3>{destination.pickTo}</h3>
                  </li>
                </ul>
              </div>
              <div className="ride-info d-flex justify-content-around align-item-center rounded mt-3 bg-light p-4">
                <img width="50px" src={image} alt="" />
                <h2>{name}</h2>
                <div>
                  <img width="28px" height="28px" src={passengerImg} alt="" />
                  <h6>{passenger}</h6>
                </div>
                <h5>${price}</h5>
              </div>
              <div className="ride-info d-flex justify-content-around align-item-center mt-3 bg-light p-4">
                <img width="50px" src={image} alt="" />
                <h2>{name}</h2>
                <div>
                  <img width="28px" height="28px" src={passengerImg} alt="" />
                  <h6>{passenger}</h6>
                </div>
                <h5>${price}</h5>
              </div>
              <div className="ride-info d-flex justify-content-around align-item-center mt-3 bg-light p-4">
                <img width="50px" src={image} alt="" />
                <h2>{name}</h2>
                <div>
                  <img width="28px" height="28px" src={passengerImg} alt="" />
                  <h6>{passenger}</h6>
                </div>
                <h5>${price}</h5>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDestination}>
              <label htmlFor="pickFrom">Pick From</label>
              <input
                onBlur={handleBlur}
                name="pickFrom"
                className="form-control mb-2"
                type="text"
                required
                placeholder="pick from"
              />
              <label htmlFor="pickTo">Pick To</label>
              <input
                onBlur={handleBlur}
                name="pickTo"
                className="form-control mb-2"
                type="text"
                required
                placeholder="pick to"
              />
              <
              <input
                className="search-btn form-control btn btn-primary btn-lg mt-3 mb-2 p-2"
                type="submit"
                value="Search"
              />
            </form>
          )}
        </div>
        <div className="map-div col-md-8">
          <Map></Map>
        </div>
      </div>
    </div>
  );
};

export default Destination;
