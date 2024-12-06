import React, { useEffect } from "react";
import "./Error.css";
import { ImHome } from "react-icons/im";
import Footer from "../HomeComp/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
const Error = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="colors"></div>
      <section className="errors">
        <div className="mainerr">
          <img
            id="cartoon"
            src="carr.png"
            alt=""
            data-aos="fade-right"
            data-aos-duration="4000"
          />
          <img
            id="error-pic"
            src="4043.png"
            alt=""
            data-aos="fade-left"
            data-aos-duration="4000"
          />
        </div>
        <NavLink to="/" id="nav-l">
          <h5 id="homess">
               <span>
                 <ImHome id="home-ic"/>
            </span>
               Home
          </h5>
        </NavLink>
      </section>
      <Footer />
    </>
  );
};

export default Error;
