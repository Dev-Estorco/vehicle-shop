import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <button onClick={goToPrevious}>Previous</button>
      <img src={images[currentIndex]} alt={`Vehicle ${currentIndex + 1}`} />
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default ImageSlider;