import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomeComp/Home";
import About from "./AboutComp/About";
import Contact from "./ContactComp/Contact";
import Navbar from "./Navbar/Navbar";
import Services from "./ServicesComp/Services";
import Preloader from "./Preloader/Preloader";
import Error from "./Errorpage/Error";
import Login from "./Login/Login";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  return <div className="app">{loading ? <Preloader /> : <MainContent />}</div>;
};
const MainContent = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
