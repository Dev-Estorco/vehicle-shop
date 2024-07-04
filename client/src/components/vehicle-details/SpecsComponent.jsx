import React from 'react';
import { Typography, Card } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import '../../styles/vehicle-details/specs.css';

const { Title, Text } = Typography;

const SpecsComponent = () => {
    return (
        <div className="specs-content">
            <Title className='key-spec' level={3}>Key Specs</Title>
            <Text className="vehicle-id">Vehicle ID: 123456789</Text>
            <div className="key-specs">
                <Card className="spec-card">Transmission Type: <br />1-Speed Automatic</Card>
                <Card className="spec-card">Start Option: <br /> Electric</Card>
                <Card className="spec-card">Front Brake: <br />  4-wheel anti-lock braking system (ABS) </Card>
                <Card className="spec-card">Maximum Power: <br />568 kW</Card>
                <Card className="spec-card">Ground Clearance: <br />5.5 inches</Card>
                <Card className="spec-card">Displacement: <br /> 1000cc</Card>

            </div>
            <div className="basic-specs">
                <Title level={4}>Basics</Title>
                <table>
                    <tbody>
                        <tr><td>Engine Type</td><td>Air Cooled, 4 Strock</td></tr>
                        <tr><td>Drivetrain</td><td>All-wheel Drive</td></tr>
                        <tr><td>Transmission</td><td>Automatic</td></tr>
                        <tr><td>Mileage</td><td>31,422 mi.</td></tr>
                        <tr><td>Exterior Color</td><td>White</td></tr>
                        <tr><td>Interior Color</td><td>Gray</td></tr>
                        <tr><td>VIN</td><td>5YJ3DFGFHFGHB1M324</td></tr>
                        <tr><td>Exterior</td><td>Alloy Wheels, unroof/Moonroof </td></tr>
                        <tr><td>Seating</td><td>Memory Seat</td></tr>
                        <tr><td>Entertainment</td><td>Bluetooth</td></tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SpecsComponent;
