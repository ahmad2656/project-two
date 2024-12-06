import React, { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import "./Scrollbtn.css";
const Scrollbtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      transition: "1s all",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className={`scroll-to-top-button${isVisible ? " visible" : ""}`}
          onClick={scrollToTop}
        >
          <span>
            <FaLocationArrow />
          </span>
        </button>
      )}
    </div>
  );
};

export default Scrollbtn;
