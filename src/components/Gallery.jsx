import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Gallery.css";

const images = [
  "/img/15.jpg",
  "/img/16.jpg",
  "/img/17.jpg",
  "/img/18.jpg",
  // Dodaj więcej adresów URL obrazów, jeśli jest ich więcej
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div className="gallery-container" {...handlers}>
      <button className="arrow left-arrow" onClick={prevImage}>
        &#10094;
      </button>
      <img className="gallery-image" src={images[currentIndex]} alt="..." />
      <button className="arrow right-arrow" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Gallery;
