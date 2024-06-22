import React , { useState } from "react";
import "../../styles/navigation/navigation.css";
import { Link } from "react-router-dom";
import mlLogo from "../../assets/images/mlLogo.png";




const NavigationComponent = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
   <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          <img src={mlLogo} alt="Logo" />
        </Link>


        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="#" className="nav-link">Cars</Link>
            <div className="dropdown">
              <Link to="/search-cars" className="dropdown-link">Search Cars</Link>
              <Link to="/latest-cars" className="dropdown-link">Latest Cars</Link>
              <Link to="/popular-cars" className="dropdown-link">Most Popular Cars</Link>
              <Link to="/used-cars" className="dropdown-link">Used Cars</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/motorcycles" className="nav-link">Motorcycles</Link>
            <div className="dropdown">
              <Link to="/search-motorcycles" className="dropdown-link">Search Motorcycles</Link>
              <Link to="/latest-motorcycles" className="dropdown-link">Latest Motorcycles</Link>
              <Link to="/popular-motorcycles" className="dropdown-link">Most Popular Motorcycles</Link>
              <Link to="/used-motorcycles" className="dropdown-link">Used Motorcycles</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/insurance" className="nav-link">Insurance</Link>
          </li>
          <li className="nav-item">
            <Link to="/loan" className="nav-link">Loan</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationComponent;