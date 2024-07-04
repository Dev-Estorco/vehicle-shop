import React, { useState } from "react";
import CarouselComponent from "./vehicle-details/CarouselComponent";
import SpecsComponent from "./vehicle-details/SpecsComponent";
import ContactUsComponent from "./vehicle-details/ContactUsComponent";
import FooterComponent from "./layout/FooterComponent";
import "../styles/vehicle-details/vehicle-details.css";

import teslaImage from "../assets/images/cars/tesla.jpg";
import tesla2 from "../assets/images/cars/tesla2.jpg";
import tesla3 from "../assets/images/cars/tesla3.jpg";
import tesla4 from "../assets/images/cars/tesla4.jpg";
import tesla5 from "../assets/images/cars/tesla5.jpg";
import jeep from "../assets/images/cars/jeep.jpg";
import mercedez from "../assets/images/cars/mercedez.jpg";
import nissan from "../assets/images/cars/nissan.jpg";


const VehicleDetailsComponent = () => {

    const [vehicleData, setVehicleData] = useState({
        name: "Tesla Model 3",
        price: 1000000,
        type: "Sedan",
        condition: "New",
        images: [
           teslaImage, tesla2, tesla3, tesla4, tesla5, jeep, mercedez, nissan
        ]
    });


  return (
    <>
      <CarouselComponent vehicleData={vehicleData}/>

      <div className="vehicle-details-container">
        <div className="specs-container">
          <SpecsComponent/>
        </div>
        <div className="contact-us-container">
          <ContactUsComponent vehicleData={vehicleData}/>
        </div>
      </div>
      
      <FooterComponent/>
    </>
  );
};

export default VehicleDetailsComponent;
