import React from "react";
import { Card, Row, Col, Tag } from 'antd'
import '../../styles/landing-page/vehicle-card-display.css'
import { Link } from "react-router-dom";



const VehicleCard = ({ vehicle }) => (
    <Link to={`/vehicle-details`} className="vehicle-card-link">
        <Card 
            hoverable
            cover={
                <div className="card-image-container">
                    <img alt={vehicle.name} src={vehicle.image} />
                    <Tag className={`condition-tag ${vehicle.condition.toLowerCase()}`}>
                        {vehicle.condition}
                    </Tag>
                </div>
            }
            className="vehicle-card"
        >
            <div className="car-details">
                <p className="car-type">{vehicle.type}</p>
                <h3 className="car-name">{vehicle.make} {vehicle.model}</h3>
                <p className="car-price">Price: ₱{vehicle.price.toLocaleString()}</p>
                <p className="car-monthly-price">Monthly: <span className="monthly-price">₱{vehicle.monthlyPrice}/month</span></p>
            </div>
        </Card>
    </Link>
);

const VehicleCardDisplay = ({ vehicles }) => {
    return (
        <div className="vehicle-card-display">
            <Row gutter={[24, 24]} justify="center">
                {vehicles.map((vehicle, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                        <VehicleCard vehicle={vehicle} />
                    </Col>
                ))}
            </Row>
        </div>
    );

};

    

export default VehicleCardDisplay;
