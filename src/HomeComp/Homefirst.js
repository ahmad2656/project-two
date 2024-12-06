import React, { useEffect } from "react";
import "./Homefirst.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Homefirst = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="first-cont">
        <div className="f-grid">
          <div className="f1" data-aos="fade-up" data-aos-duration="4000">
            <h3 id="soft-text">
              Software Development at <br /> <span id="tech">TechWay.</span>
            </h3>
            <h4 id="del-text">
              Delivering Superior Services Cutting Edge IT Solutions.
            </h4>
            <p className="lor-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button id="get-btn">Get Started</button>
          </div>
          <div className="f2" data-aos="fade-up" data-aos-duration="4000">
            <img src="1.webp" id="web" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homefirst;
