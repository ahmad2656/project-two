import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Dark.css";

const Dark = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(storedMode === "true");
      updateBodyClass(storedMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    updateBodyClass(newMode);
  };

  const updateBodyClass = (isDark) => {
    document.body.classList.toggle("dark-body", isDark);
  };

  return (
    <div className={`dark-light-toggle ${isDarkMode ? "dark" : "light"}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <FaSun  color="white" className="moons"/>
        ) : (
          <FaMoon  color="white" className="moons"/>
        )}
      </button>
    </div>
  );
};

export default Dark;
