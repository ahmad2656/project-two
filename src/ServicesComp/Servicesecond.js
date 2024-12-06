import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { SlSocialDropbox } from "react-icons/sl";
import { TiSocialLastFmCircular } from "react-icons/ti";
import { GrInsecure } from "react-icons/gr";
import { FaCloudRain, FaPeopleArrows } from "react-icons/fa";
import { FaCentercode, FaAppStoreIos } from "react-icons/fa";
import { GiPaintBucket } from "react-icons/gi";
import { TiArrowMinimiseOutline } from "react-icons/ti";
import "./Servicesecond.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Scrollbtn from "../Scrollbtn/Scrollbtn";
const Servicesecond = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="sec-three">
        <Scrollbtn />
        <Container>
          <div className="g-three">
            <div
              className="boxess"
              data-aos="flip-left"data-aos-duration="4000"
            >
              <SlSocialDropbox className="three-icons" />
              <h3 className="headsr">Application Design</h3>
              <p className="boxx-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div
              className="boxess"
              data-aos="flip-left"
              data-aos-duration="4000"
            >
              <TiArrowMinimiseOutline className="three-icons" />
              <h3 className="headsr">SEO Optimization</h3>
              <p className="boxx-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div
              className="boxess"
              data-aos="flip-left"
              data-aos-duration="4000"
            >
              <FaCloudRain className="three-icons" />
              <h3 className="headsr">Cloud Server</h3>
              <p className="boxx-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div
              className="boxess"
              data-aos="flip-left"
              data-aos-duration="4000"
            >
              <TiSocialLastFmCircular className="three-icons" />
              <h3 className="headsr">Social Media</h3>
              <p className="boxx-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div
              className="boxess"
              data-aos="flip-left"
              data-aos-duration="4000"
            >
              <FaPeopleArrows className="three-icons" />
              <h3 className="headsr">Digital Compaigns</h3>
              <p className="boxx-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div
              className="boxess"
              data-aos="flip-left"
              data-aos-duration="4000"
            >
              <FaAppStoreIos className="three-icons" />
              <h3 className="headsr">App Maintenance</h3>
              <p className="boxx-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div
              className="boxess"
              data-aos="flip-left"
              data-aos-duration="4000"
            >
              <FaCentercode className="three-icons" />
              <h3 className="headsr">Mobile Application</h3>
              <p className="boxx-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>

            <div
              className="boxess"
              data-aos="flip-left"
              data-aos-duration="4000"
            >
              <GiPaintBucket className="three-icons" />
              <h3 className="headsr">Graphics</h3>
              <p className="boxx-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                reiciendis. Saepe et cupiditate.
              </p>
            </div>
            <div
              className="boxess"
              data-aos="flip-left"
              data-aos-duration="4000"
            >
              <GrInsecure className="three-icons" />
              <h3 className="headsr">Secure Data</h3>
              <p className="boxx-para">
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

export default Servicesecond;
