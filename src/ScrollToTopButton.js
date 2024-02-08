import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Dodajemy event listener do sprawdzania, czy użytkownik przewinął stronę
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isTop = currentScrollY < 100; // Możesz dostosować wartość według potrzeb
      setIsVisible(!isTop);
    };

    // Dodajemy nasłuchiwanie na zdarzenie przewijania strony
    window.addEventListener("scroll", handleScroll);

    // Odpinamy event listener w momencie odmontowywania komponentu
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Funkcja obsługująca przewinięcie strony do góry
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Dodaj płynne przewijanie
    });
  };

  return (
    // Wyrenderuj przycisk tylko jeśli isVisible jest true
    isVisible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowAltCircleUp className="arrow" />
      </div>
    )
  );
};

export default ScrollToTopButton;
