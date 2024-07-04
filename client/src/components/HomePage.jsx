import React, { useState, useEffect } from "react";
import Typography from "antd/es/typography/Typography";
import Banner from "./homepage/Banner";
import SearchVehicleComponent from "./homepage/SearchVehicleComponent";
import VehicleCardDisplay from "./homepage/VehicleCardDisplay";
import PaginationComponent from "./homepage/PaginationComponent";
import FooterComponent from "./layout/FooterComponent";
import '../styles/landing-page/banner.css'
import { allCars } from "../staticData/vehicleData";

const { Title } = Typography;

const HomePage = () => {
    const [filteredVehicles, setFilteredVehicles] = useState(allCars);
    const [currentPage, setCurrentPage] = useState(1);
    const vehiclesPerPage = 4;

    const indexOfLastVehicle = currentPage * vehiclesPerPage;
    const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
    const currentVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="home-page">
                <Banner>
                    <div className="search-container">
                        <SearchVehicleComponent setFilteredVehicles={setFilteredVehicles} />
                    </div>
                </Banner>
            </div>
            <div className="content">
                <div className="content-wrapper">
                    <Title level={3} className="search-result-title">Search Result</Title>
                    <VehicleCardDisplay vehicles={currentVehicles} />                    
                    <PaginationComponent
                        total={filteredVehicles.length}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>


            
            <FooterComponent />
        </>
    );
};

export default HomePage;