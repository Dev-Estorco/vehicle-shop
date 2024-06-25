import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allCars, allMotorcycles } from "../staticData/vehicleData";
import NavigationComponent from "./layout/NavigationComponent";
import ImageSlider from "./ImageSlider";
import '../styles/vehicle-details.css'
import jeep from "../assets/images/cars/jeep.jpg";


const VehicleDetailsPage = () => {
  const [currentVehicleType, setCurrentVehicleType] = useState("cars");
  const [vehicle, setVehicle] = useState(null);
  const { vehicleType, id } = useParams();

  useEffect(() => {
    const vehicles = vehicleType === "cars" ? allCars : allMotorcycles;
    const foundVehicle = vehicles.find((v) => v.id === parseInt(id));
    setVehicle(foundVehicle);
  }, [vehicleType, id]);

  if (!vehicle) return <div>Loading...</div>;

  return (
    <div className="vehicle-details-container">
      <NavigationComponent onVehicleTypeChange={setCurrentVehicleType} />
      <div className="content-wrap">
            <h1>{vehicle.make} {vehicle.model}</h1>
            <p>Type: {vehicleType === "cars" ? "Car" : "Motorcycle"} - {vehicle.type}</p>
            <ImageSlider images={vehicle.image}/>

            <div className="vehicle-info">
            <p>Type: {vehicle.type}</p>
            <p>Price: ${vehicle.price}</p>
            <p>Monthly Price: ${vehicle.monthlyPrice}</p>

            {vehicleType === "cars" && (
                <>
                <p>Number of Doors: </p>
                <p>Fuel Type: </p>
                </>
            )}

            {vehicleType === "motorcycles" && (
                <>
                <p>Engine Size: cc</p>
                <p>Bike Type: </p>
                </>
            )}
            </div>
        {/* inquiry form */}
      </div>
    </div>
  );
};

export default VehicleDetailsPage;
