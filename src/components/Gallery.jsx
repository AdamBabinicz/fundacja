import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Gallery.css";

const images = [
  "/img/0.avif",
  "/img/1.avif",
  "/img/2.avif",
  "/img/3.avif",
  "/img/4.avif",
  "/img/5.avif",
  "/img/6.avif",
  "/img/7.avif",
  "/img/8.avif",
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
      <img
        className="gallery-image"
        src={images[currentIndex]}
        alt="..."
        loading="lazy"
      />
      <button className="arrow right-arrow" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Gallery;
