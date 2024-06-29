import React, { useEffect, useState } from 'react';
import { Select, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../../styles/landing-page/vehicle-search.css';
import { allCars, allMotorcycles } from '../../staticData/vehicleData';

const { Option } = Select;

const SearchVehicleComponent = ({ setFilteredVehicles }) => {
    const [vehicleCategory, setVehicleCategory] = useState('car');
    const [type, setType] = useState('All Types');
    const [make, setMake] = useState('All Makes');
    const [model, setModel] = useState('All Models');
    const [condition, setCondition] = useState('All Conditions');
    const [vehicles, setVehicles] = useState([]);
    const [totalMatches, setTotalMatches] = useState(0);


    useEffect(() => {
        setVehicles(vehicleCategory === 'car' ? allCars : allMotorcycles);
    }, [vehicleCategory]);


    useEffect(() => {
        filterVehicles();
    }, [type, make, model, condition, vehicles]);


    const filterVehicles = () => {
        let filtered = vehicles;

        if (condition !== 'All Conditions') {
            filtered = filtered.filter(vehicle => vehicle.condition === condition);
        }

        if (type !== 'All Types') {
            filtered = filtered.filter(vehicle => vehicle.type === type);
        }

        if (make !== 'All Makes') {
            filtered = filtered.filter(vehicle => vehicle.make === make);
        }

        if (model !== 'All Models') {
            filtered = filtered.filter(vehicle => vehicle.model === model);
        }

        setFilteredVehicles(filtered);
        setTotalMatches(filtered.length);
    };


    const getFilteredDropdownOptions = () => {
        const filtered = vehicles.filter(vehicle => {
            return (
                (condition === 'All Conditions' || vehicle.condition === condition) &&
                (type === 'All Types' || vehicle.type === type) &&
                (make === 'All Makes' || vehicle.make === make) &&
                (model === 'All Models' || vehicle.model === model)
            );
        });

        const conditions = [...new Set(filtered.map(vehicle => vehicle.condition))];
        const types = [...new Set(filtered.map(vehicle => vehicle.type))];
        const makes = [...new Set(filtered.map(vehicle => vehicle.make))];
        const models = [...new Set(filtered.map(vehicle => vehicle.model))];

        return { conditions, types, makes, models };
    };


    const handleVehicleCategoryChange = (category) => {
        setVehicleCategory(category);
        setType('All Types');
        setMake('All Makes');
        setModel('All Models');
        setCondition('All Conditions');
    };


    const dropdownOptions = getFilteredDropdownOptions();


    return (
        <>
            <div className="search-vehicle-container">
                <div className="search-content">
                    <Row gutter={[16, 16]}>
                    <div className="vehicle-type-buttons">
                    <Button
                            className={`vehicle-type-btn ${vehicleCategory === 'car' ? 'selected' : ''}`}
                            onClick={() => handleVehicleCategoryChange('car')}
                        >
                            Search for Car
                        </Button>
                        <Button
                            className={`vehicle-type-btn ${vehicleCategory === 'motorcycle' ? 'selected' : ''}`}
                            onClick={() => handleVehicleCategoryChange('motorcycle')}
                        >
                            Search for Motorcycle
                        </Button>
                    </div>

                    <Col span={24}>
                        <div className="search-controls">
                            <Select
                                className="search-select"
                                value={condition}
                                onChange={setCondition}
                                placeholder="Condition"
                                style={{width:150}}
                            >
                                <Option value="All Conditions">All Conditions</Option>
                                {dropdownOptions.conditions.map((condition, index) => (
                                    <Option key={index} value={condition}>{condition}</Option>
                                ))}
                            </Select>

                            <Select
                                className="search-select"
                                value={type}
                                onChange={setType}
                                placeholder="Type"
                                style={{ width: 150 }}
                            >
                                <Option value="All Types">All Types</Option>
                                {dropdownOptions.types.map((type, index) => (
                                    <Option key={index} value={type}>{type}</Option>
                                ))}
                            </Select>
                            
                            <Select
                                className="search-select"
                                value={make}
                                onChange={setMake}
                                placeholder="Make"
                                style={{ width: 150 }}
                            >
                                <Option value="All Makes">All Makes</Option>
                                {dropdownOptions.makes.map((make, index) => (
                                    <Option key={index} value={make}>{make}</Option>
                                ))}
                            </Select>
                            
                            <Select
                                className="search-select"
                                value={model}
                                onChange={setModel}
                                placeholder="Model"
                                style={{ width: 150 }}
                            >
                               <Option value="All Models">All Models</Option>
                                {dropdownOptions.models.map((model, index) => (
                                    <Option key={index} value={model}>{model}</Option>
                                ))}
                            </Select>
                            
                            <Button 
                                type="primary" 
                                onClick={() => console.log('Search clicked')}
                                className="total-matches-btn"
                                icon={<SearchOutlined/>}
                            > 
                                Total Matches: {totalMatches}
                            </Button>
                        </div>
                    </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default SearchVehicleComponent;