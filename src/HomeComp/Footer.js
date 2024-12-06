import React from "react";
import Container from "react-bootstrap/Container";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <section className="fo-sec">
        <Container>
          <div className="fot-grid">
            <div>
              <h2 className="main-fo">Techway.</h2>
              <p className="fo-para">
                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                do eiusmod tempor incididuntut consec tetur adipisicing
                elit,Lorem ipsum dolor sit amet.
              </p>
              <h5 id="follow">Follow us</h5>
              <div className="fo-links">
                <span>
                  <FaFacebook className="fo-icons" />
                </span>
                <span>
                  <RiTwitterXLine className="fo-icons" />
                </span>
                <span>
                  <AiFillInstagram className="fo-icons" />
                </span>
                <span>
                  <FaGoogle className="fo-icons" />
                </span>
              </div>
            </div>
            <div>
              <h5 className="main-fo" id="useful">
                Useful links
              </h5>
              <h6 className="fo-links">
                <span>
                  <IoIosArrowDroprightCircle className="arrows-ico" />
                </span>
                Home
              </h6>
              <h6 className="fo-links">
                <span>
                  <IoIosArrowDroprightCircle className="arrows-ico" />
                </span>
                About
              </h6>
              <h6 className="fo-links">
                <span>
                  <IoIosArrowDroprightCircle className="arrows-ico" />
                </span>
                Service
              </h6>
              <h6 className="fo-links">
                <span>
                  <IoIosArrowDroprightCircle className="arrows-ico" />
                </span>
                FAQ'S
              </h6>
              <h6 className="fo-links">
                <span>
                  <IoIosArrowDroprightCircle className="arrows-ico" />
                </span>
                Pricing
              </h6>
              <h6 className="fo-links">
                <span>
                  <IoIosArrowDroprightCircle className="arrows-ico" />
                </span>
                Our Team
              </h6>
              <h6 className="fo-links">
                <span>
                  <IoIosArrowDroprightCircle className="arrows-ico" />
                </span>
                Our News
              </h6>
            </div>
            <div>
              <h5 className="main-fo" id="contact">
                Contact
              </h5>
              <h6 className="address">Address:</h6>
              <h6 className="address">Lahore ,Pakistan</h6>
              <h6 className="address">Phone:</h6>
              <h6 className="address">+92-3346439556</h6>
              <h6 className="address">+92-3174479125</h6>
              <h6 className="address">Email:</h6>
              <h6 className="address">shahg565758@gmail.com</h6>
            </div>
          </div>
        </Container>
        <div className="last-foot">
          <h6 id="copy">Techway&Copyright@2024</h6>
          <h6 id="privacy">Privacy Policy Terms</h6>
        </div>
      </section>
    </>
  );
};

export default Footer;
