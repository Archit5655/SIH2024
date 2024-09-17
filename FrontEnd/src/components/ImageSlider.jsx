import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/301',
    'https://picsum.photos/200/302',
    'https://picsum.photos/200/303',
    'https://picsum.photos/200/304',
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? 'dot active' : 'dot'}
            onClick={() => handleDotClick(index)}
          >
            &#8226;
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;