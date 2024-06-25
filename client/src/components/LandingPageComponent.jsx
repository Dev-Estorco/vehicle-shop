import React, { useState, useEffect } from "react";
import NavigationComponent from "./layout/NavigationComponent";
import CarCard from "./VehicleCard";
import Pagination from "./Pagination";
import "../../src/styles/landing-page/landing-page.css";

import FooterComponent from "./layout/FooterComponent";
import VehicleSearchDropdown from "./VehicleSearchDropdown";

import { allCars, allMotorcycles } from "../staticData/vehicleData"

function LandingPageComponent() {
 

  const [currentVehicleType, setCurrentVehicleType] = useState("cars");
  const [filteredVehicles, setFilteredVehicles] = useState(allCars);
  const [selectedMake, setSelectedMake] = useState("All");
  const [selectedModel, setSelectedModel] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 8;

  useEffect(() => {
    const vehicles = currentVehicleType === "cars" ? allCars : allMotorcycles;
    setFilteredVehicles(vehicles);
    setSelectedMake("All");
    setSelectedModel("All");
    setSelectedType("All");
    setCurrentPage(1);
  }, [currentVehicleType]);

  const handleSearch = (make, model, type) => {
    setSelectedMake(make);
    setSelectedModel(model);
    setSelectedType(type);

    let vehicles = currentVehicleType === "cars" ? allCars : allMotorcycles;
    let filtered = vehicles;

    if (make !== "All") {
      filtered = filtered.filter((vehicle) => vehicle.make === make);
    }
    if (model !== "All") {
      filtered = filtered.filter((vehicle) => vehicle.model === model);
    }
    if (type !== "All") {
      filtered = filtered.filter((vehicle) => vehicle.type === type);
    }
    setFilteredVehicles(filtered);
    setCurrentPage(1);
  };

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = filteredVehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="page-container">
      <NavigationComponent onVehicleTypeChange={setCurrentVehicleType} />

      <div className="content-wrap">
        <VehicleSearchDropdown
          vehicles={currentVehicleType === "cars" ? allCars : allMotorcycles}
          vehicleType={currentVehicleType === "cars" ? "Cars" : "Motorcycles"}
          onSearch={handleSearch}
          selectedMake={selectedMake}
          selectedModel={selectedModel}
          selectedType={selectedType}
        />

        <div className="vehicle-display">
          <h2>
            Featured {currentVehicleType === "cars" ? "Cars" : "Motorcycles"}
          </h2>
          <div className="vehicle-grid">
            {currentVehicles.map((vehicle) => (
              <CarCard
                key={vehicle.id}
                image={vehicle.image}
                type={vehicle.type}
                name={`${vehicle.make} ${vehicle.model}`}
                price={vehicle.price}
                monthlyPrice={vehicle.monthlyPrice}
                {...vehicle} 
                vehicleType={currentVehicleType}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handleClick}
          />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default LandingPageComponent;
