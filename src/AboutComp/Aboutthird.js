import React from "react";
import Container from "react-bootstrap/Container";
import { FaSignal, FaUserFriends } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import "./Aboutthird.css";
const Aboutthird = () => {
  return (
    <>
      <section className="cli-sec">
        <Container>
          <div className="cl-grid">
            <div>
              <FaUserFriends className="cl-icons" />
              <h4 className="cl-count">8097</h4>
              <h5 className="cl-cat" id="happy">Happy Clients</h5>
              <p className="cl-para">consequuntur quae diredo</p>
            </div>
            <div>
              <FaSignal className="cl-icons" />
              <h4 className="cl-count">780</h4>
              <h5 className="cl-cat">Complete Projects</h5>
              <p className="cl-para">adipisci atque cum quia aut</p>
            </div>
            <div>
              <Ri24HoursFill className="cl-icons" />
              <h4 className="cl-count">7800</h4>
              <h5 className="cl-cat">Hours Of Support</h5>
              <p className="cl-para">consequuntur quae diredo</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Aboutthird;
