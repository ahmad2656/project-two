import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./Aboutsecond.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Scrollbtn from "../Scrollbtn/Scrollbtn";
const Aboutsecond = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="sec-web">
        <Scrollbtn />
        <Container>
          <div className="lang-grid">
            <div data-aos="fade-right" data-aos-duration="4000">
              <div id="techno">
                <span id="bes-text">Best</span>
                <span id="tech-text">Technology</span>
              </div>
              <img id="web-logo" src="set.webp" alt="web" />
            </div>
            <div data-aos="fade-right" data-aos-duration="4000">
              <p id="lang-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Xonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              <div className="line-1 lines">TDD</div>
              <div className="line-2 lines">Python</div>
              <div className="line-3 lines">C#</div>
              <div className="line-4 lines">CSS3</div>
              <div className="line-5 lines">HTML5</div>
              <div className="line-6 lines">React JS</div>
              <div className="line-7 lines">Javascript</div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Aboutsecond;
