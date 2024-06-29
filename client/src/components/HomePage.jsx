import React, { useState, useEffect } from "react";
import Typography from "antd/es/typography/Typography";
import Banner from "./homepage/Banner";
import SearchVehicleComponent from "./homepage/SearchVehicleComponent";
import VehicleCardDisplay from "./homepage/VehicleCardDisplay";
import '../styles/landing-page/banner.css'
import { allCars } from "../staticData/vehicleData";

const { Title } = Typography;

const HomePage = () => {

    const [filteredVehicles, setFilteredVehicles] = useState(allCars);

    return (
        <>
           <div className="home-page">
                <Banner>
                    <div className="search-container">
                        <SearchVehicleComponent setFilteredVehicles={setFilteredVehicles}/>
                    </div>
                </Banner>
            </div>
            <div className="content">
                <div className="content-wrapper">
                    <Title level={3} className="search-result-title">Search Result</Title>
                    <VehicleCardDisplay vehicles={filteredVehicles}/>
                </div>
            </div>
        </>
    );
  };
  
  export default HomePage;