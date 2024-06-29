import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Banner = ({ children }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <Title className='banner-text' level={1}>Find Your Dream Ride</Title>
        <Title className='banner-text3' level={3}>Explore our wide range of cars and motorcycles</Title>
      </div>
      {children}
    </div>
  );
};

export default Banner;