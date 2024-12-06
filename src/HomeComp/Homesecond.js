import React from "react";
import Container from "react-bootstrap/Container";
import { FiCodepen } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { LuCode2 } from "react-icons/lu";
import { SiFsecure } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import { BsXbox, BsCloudDrizzleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homesecond.css";
import Scrollbtn from "../Scrollbtn/Scrollbtn";
import { useEffect } from "react";
const Homesecond = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="sec-two">
        <Scrollbtn />
        <Container>
          <div className="g-two">
            <div className="boxes" data-aos="zoom-in-up" data-aos-duration="7000">
              <FiCodepen className="two-icons" />
              <h3 className="heads">Application Design</h3>
              <p className="box-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div className="boxes" data-aos="zoom-in-up" data-aos-duration="7000">
              <BsXbox className="two-icons" />
              <h3 className="heads">SEO Optimization</h3>
              <p className="box-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div className="boxes" data-aos="zoom-in-up" data-aos-duration="7000">
              <BsCloudDrizzleFill className="two-icons" />
              <h3 className="heads">Cloud Server</h3>
              <p className="box-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div className="boxes" data-aos="zoom-in-up" data-aos-duration="7000">
              <AiFillInstagram className="two-icons" />
              <h3 className="heads">Social Media</h3>
              <p className="box-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div className="boxes" data-aos="zoom-in-up" data-aos-duration="7000">
              <FiSend className="two-icons" />
              <h3 className="heads">Digital Compaigns</h3>
              <p className="box-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div className="boxes" data-aos="zoom-in-up" data-aos-duration="7000">
              <LuCode2 className="two-icons" />
              <h3 className="heads">App Maintenance</h3>
              <p className="box-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div className="boxes" data-aos="zoom-in-up" data-aos-duration="7000">
              <FaMobileAlt className="two-icons" />
              <h3 className="heads">Mobile Application</h3>
              <p className="box-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div className="boxes" data-aos="zoom-in-up" data-aos-duration="7000">
              <SiFsecure className="two-icons" />
              <h3 className="heads">Secure Data</h3>
              <p className="box-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Homesecond;
