import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Gallery.css";

const images = [
  "/img/0.jpg",
  "/img/1.jpg",
  "/img/2.jpg",
  "/img/3.jpg",
  "/img/4.jpg",
  "/img/5.jpg",
  "/img/6.jpg",
  "/img/7.jpg",
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
