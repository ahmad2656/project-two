import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./Contactsecond.css";
import Scrollbtn from "../Scrollbtn/Scrollbtn";
import AOS from "aos";
import "aos/dist/aos.css";
const Contactsecond = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="con-sec">
        <Scrollbtn />
        <Container>
          <div className="cont-grid">
            <div className="f-ser" data-aos="zoom-out" data-aos-duration="4000">
              <input
                type="text"
                placeholder="Name*"
                className="inps"
                id="name"
              />
              <input
                type="text"
                placeholder="Email*"
                className="inps"
                id="mail-ak"
              />
              <input type="text" placeholder="Subject*" className="sub-inps" />
              <div className="text-ar-f">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Write Your Message*"
                  data-aos="fade-in"
                  data-aos-duration="4000"
                ></textarea>
                <button id="message-btn">Send Message</button>
              </div>
            </div>

            <div
              className="cont-box"
              data-aos="fade-in"
              data-aos-duration="4000"
            >
              <h4 className="ads">Address:</h4>
              <h5 className="ads">11 Johar Town</h5>
              <h5 className="ads">Lahore,Pakistan</h5>
              <h4 className="mails">Phone:</h4>
              <div id="nums-di">
                <h5>+1 1234 56 789 +1 1234 56 780</h5>
              </div>
              <h4 className="mails">Email:</h4>
              <h5 id="inf-mail">
                infohashmi565758@gmail.com hashmiahmad265@gmail.com
              </h5>
            </div>
          </div>
        </Container>
        <iframe
          className="map"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=820&amp;height=400&amp;hl=en&amp;q=%20Lahore+(Shadbagh)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </section>
    </>
  );
};

export default Contactsecond;
