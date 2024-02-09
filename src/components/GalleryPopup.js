import React from "react";
import Gallery from "./Gallery";
import "./GalleryPopup.css";
import { IoCloseSharp } from "react-icons/io5";

const GalleryPopup = ({ isOpen, onClose }) => {
  const handleOverlayClick = (e) => {
    // Zatrzymaj propagację zdarzenia, aby nie wywoływało onClose
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div className="gallery-popup-overlay" onClick={onClose}>
      <div className="gallery-popup" onClick={handleOverlayClick}>
        <Gallery />
        <button className="close-button" onClick={onClose}>
          <IoCloseSharp />
        </button>
      </div>
    </div>
  );
};

export default GalleryPopup;
