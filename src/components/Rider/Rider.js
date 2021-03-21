import React from "react";
import { useHistory } from "react-router";
import "./Rider.css";
const Rider = (props) => {
  const { name, image, id } = props.rider;
  let history = useHistory();
  const handleRiderOnClick = (riderId) => {
    history.push(`/rider/${riderId}`);
  };

  return (
    <div>
      <div className="rider-div" onClick={() => handleRiderOnClick(id)}>
        <img src={image} alt="" />
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Rider;
