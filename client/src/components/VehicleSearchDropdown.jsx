import React, { useState, useEffect } from "react";
import "../styles/vehicle-search-dropdown.css";

const VehicleSearchDropdown = ({
  vehicles,
  vehicleType,
  onSearch,
  selectedMake,
  selectedModel,
  selectedType,
}) => {
  // const [models, setModels] = useState([]);
  // const [totalMatches, setTotalMatches] = useState(0);

  // const makes = ["All", ...new Set(vehicles.map((vehicle) => vehicle.make))];
  // const types = ["All", ...new Set(vehicles.map((vehicle) => vehicle.type))];

  // useEffect(() => {
  //   if (selectedMake === "All") {
  //     setModels(["All"]);
  //     setTotalMatches(vehicles.length);
  //   } else {
  //     const filteredModels = [
  //       "All",
  //       ...new Set(
  //         vehicles
  //           .filter((vehicle) => vehicle.make === selectedMake)
  //           .map((vehicle) => vehicle.model)
  //       ),
  //     ];
  //     setModels(filteredModels);
  //     setTotalMatches(
  //       vehicles.filter((vehicle) => vehicle.make === selectedMake).length
  //     );
  //   }
  // }, [selectedMake, vehicles]);

  // useEffect(() => {
  //   if (selectedModel === "All") {
  //     setTotalMatches(
  //       selectedMake === "All"
  //         ? vehicles.length
  //         : vehicles.filter((vehicle) => vehicle.make === selectedMake).length
  //     );
  //   } else {
  //     setTotalMatches(
  //       vehicles.filter(
  //         (vehicle) =>
  //           vehicle.make === selectedMake && vehicle.model === selectedModel
  //       ).length
  //     );
  //   }
  // }, [selectedModel, selectedMake, selectedType, vehicles]);

  return (
    <div className="vehicle-search-dropdown">
      <h2>Search for {vehicleType}</h2>
      <div className="search-controls">
        <div className="search-column">
          <label>Types</label>
          <div className="select-wrapper">
            {/* <select
              value={selectedType}
              onChange={(e) =>
                onSearch(selectedMake, selectedModel, e.target.value)
              }
            >
              <option value="All">All Types</option>
              {types
                .filter((type) => type !== "All")
                .map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
            </select> */}
          </div>
        </div>
        <div className="search-column">
          <label>Makes</label>
          <div className="select-wrapper">
            {/* <select
              value={selectedMake}
              onChange={(e) => onSearch(e.target.value, "All", selectedType)}
            >
              <option value="All">All Makes</option>
              {makes
                .filter((make) => make !== "All")
                .map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
            </select> */}
          </div>
        </div>
        <div className="search-column">
          <label>Models</label>
          <div className="select-wrapper">
            {/* <select
              value={selectedModel}
              onChange={(e) =>
                onSearch(selectedMake, e.target.value, selectedType)
              }
            >
              <option value="All">All Models</option>
              {models
                .filter((model) => model !== "All")
                .map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
            </select> */}
          </div>
        </div>
        <div className="search-column total-matches">
          <span>Total Matches: 1000</span>
          {/* <span>Total Matches: {totalMatches}</span> */}

        </div>
      </div>
    </div>
  );
};

export default VehicleSearchDropdown;
