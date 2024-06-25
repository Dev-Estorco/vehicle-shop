import React, { useState } from "react";
import "../../styles/navigation/navigation.css";
import { Link } from "react-router-dom";
import mlLogo from "../../assets/images/mlLogo.png";
import dropdown from "../../assets/icons/dropdown.png";

const NavigationComponent = ({onVehicleTypeChange}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="container">
        <Link to="/" className="logo">
          <img src={mlLogo} alt="Logo" />
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <div
              className="nav-link"
              onClick={() => {
                toggleDropdown("cars");
                onVehicleTypeChange("cars");
              }}
            >
              Cars
              <img className="dropdown-icon" alt="dropdown" src={dropdown} />
            </div>

            <div
              className={`dropdown ${
                activeDropdown === "cars" ? "active" : ""
              }`}
            >
              <Link to="/latest-cars" className="dropdown-link">
                Latest Cars
              </Link>
              <Link to="/popular-cars" className="dropdown-link">
                Most Popular Cars
              </Link>
              <Link to="/used-cars" className="dropdown-link">
                Used Cars
              </Link>
              <Link to="/electric-cars" className="dropdown-link">
                Electric Cars
              </Link>
              <Link to="/luxury-cars" className="dropdown-link">
                Luxury Cars
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              onClick={() => {
                toggleDropdown("motorcycles");
                onVehicleTypeChange("motorcycles");
              }}
            >
              Motorcycles
              <img className="dropdown-icon" alt="dropdown" src={dropdown} />
            </div>
            <div
              className={`dropdown ${
                activeDropdown === "motorcycles" ? "active" : ""
              }`}
            >
              <Link to="/latest-motorcycles" className="dropdown-link">
                Latest Motorcycles
              </Link>
              <Link to="/popular-motorcycles" className="dropdown-link">
                Most Popular Motorcycles
              </Link>
              <Link to="/used-motorcycles" className="dropdown-link">
                Used Motorcycles
              </Link>
              <Link to="/sport-motorcycles" className="dropdown-link">
                Sport Motorcycles
              </Link>
              <Link to="/cruiser-motorcycles" className="dropdown-link">
                Cruiser Motorcycles
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/insurance" className="nav-link">
              Insurance
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/loan" className="nav-link">
              Loan
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationComponent;
