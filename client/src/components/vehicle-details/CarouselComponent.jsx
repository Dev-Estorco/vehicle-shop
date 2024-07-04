import React, { useState, useEffect } from 'react';
import { Carousel, Tag, Row, Col, Typography } from 'antd';
import { LeftOutlined, RightOutlined, HeartOutlined, ShareAltOutlined, AppstoreOutlined } from '@ant-design/icons';
import '../../styles/vehicle-details/carousel.css';
import { CameraOutlined } from '@ant-design/icons';
// import teslaImage from "../../assets/images/cars/tesla.jpg";
// import tesla2 from "../../assets/images/cars/tesla2.jpg";
// import tesla3 from "../../assets/images/cars/tesla3.jpg";
// import tesla4 from "../../assets/images/cars/tesla4.jpg";
// import tesla5 from "../../assets/images/cars/tesla5.jpg";
// import jeep from "../../assets/images/cars/jeep.jpg";
// import mercedez from "../../assets/images/cars/mercedez.jpg";
// import nissan from "../../assets/images/cars/nissan.jpg";



const { Title, Text } = Typography;


const CarouselComponent = ({ vehicleData }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleThumbnails, setVisibleThumbnails] = useState([1, 2]);


    // const vehicleData = {
    //     name: "Tesla Model 3",
    //     price: 1000000,
    //     type: "Sedan",
    //     condition: "New",
    //     images: [teslaImage, tesla2, tesla3, tesla4, tesla5, jeep, mercedez, nissan]
    // };


    const { images, name, price, type, condition } = vehicleData;


    useEffect(() => {
        updateVisibleThumbnails(currentSlide);
    }, [currentSlide]);


    const updateVisibleThumbnails = (index) => {
        const nextIndex = (index + 1) % images.length;
        const nextNextIndex = (index + 2) % images.length;
        setVisibleThumbnails([nextIndex, nextNextIndex]);
    };


    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };


    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };


    const remainingPhotos = images.length - 3;


    return (
        <div className="carousel-component">
            <Row gutter={8}>
                <Col xs={24} md={18}>
                    <div className="carousel-container">
                        <div className="carousel-image-container">
                            <img src={images[currentSlide]} alt={`${name} - ${currentSlide + 1}`} />
                            <div className="image-overlay">
                                <Tag color={condition === 'New' ? '#52c41a' : '#f50'} className="vehicle-condition">
                                    {condition}
                                </Tag>
                                <Title level={2} className="vehicle-name">
                                    {name}
                                </Title>
                                <Tag color="#ed1c24" className="vehicle-price">
                                    PHP {price.toLocaleString()}
                                </Tag>
                                <Text className="vehicle-type">{type}</Text>
                                {/* <div className="icon-actions">
                                    <HeartOutlined />
                                    <AppstoreOutlined />
                                    <ShareAltOutlined />
                                </div> */}
                            </div>
                        </div>
                        <button className="carousel-button prev" onClick={prevSlide}>
                            <LeftOutlined />
                        </button>
                        <button className="carousel-button next" onClick={nextSlide}>
                            <RightOutlined />
                        </button>
                    </div>
                </Col>
                <Col xs={24} md={6}>
                    <div className="thumbnail-container">
                        {visibleThumbnails.map((index) => (
                            <div
                                key={index}
                                className="thumbnail"
                                onClick={() => setCurrentSlide(index)}
                            >
                                <img src={images[index]} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="photo-count">
                         <CameraOutlined />
                        <Title  level={3}>{remainingPhotos > 0 ? remainingPhotos : ''}</Title>
                        <Text>{remainingPhotos > 0 ? 'More Photos' : 'No More Photos'}</Text>
                    </div>
                </Col>
            </Row>
        </div>
    );
};


export default CarouselComponent;
