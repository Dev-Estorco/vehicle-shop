import React from "react";
import { Link } from "react-router-dom";


const CarCard = ({ id, image, name, type, price, monthlyPrice, vehicleType}) => {

  return (
    <Link to={`/vehicle/${vehicleType}/${id}`} className="car-card">
    <img src={image} alt={name} className="car-image" />
    <div className="car-details">
      <p className="car-type">{type}</p>
      <h3 className="car-name">{name}</h3>
      <div>
        <p className="car-price">Price: ₱{price.toLocaleString()}</p>
        <p className="car-monthly-price">Monthly: ₱{monthlyPrice.toLocaleString()}/month</p>
      </div>
    </div>
  </Link>
  );
};

export default CarCard;
