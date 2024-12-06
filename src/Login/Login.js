import React, { useEffect } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import Footer from "../HomeComp/Footer";
import Scrollbtn from "../Scrollbtn/Scrollbtn";
import AOS from "aos";
import "aos/dist/aos.css";
const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="colors"></div>
      <Scrollbtn />
      <section className="log-sec">
        <img
          src="hh.webp"
          id="log-pic"
          alt=""
          data-aos="zoom-out-down" data-aos-duration="4000"
        />
        <div
          className="box-log"
          data-aos="zoom-out-down"
          data-aos-duration="4000"
        >
          <h1 id="si-text">Sign-in</h1>
          <h6 id="new-us">
            new user?
            <NavLink href="#" id="create">
              Create an Account
            </NavLink>
          </h6>
          <input className="serch" type="text" placeholder="Name" />
          <br />
          <input className="serch" type="Password" placeholder="Password" />
          <div className="forg-div">
            <NavLink href="#" id="forgot">
              Forgot Password
            </NavLink>
            <button id="si-bt">Sign in</button>
          </div>
          <h5 id="or">~~Or~~</h5>
          <button id="f-g">
            <span>
              <img src="google.svg" alt="" className="svgs" id="s1" />
            </span>
            Sign-In-With-Google
          </button>
          <button className="g-logs" id="fb">
            <img src="facebook.svg" alt="" className="svgs" />{" "}
            Sign-In-With-Facebook
          </button>
          <button className="g-logs">
            <img src="cloudflare.svg" alt="" className="svgs" id="s3" />
            Sign-In-With-Cloud
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
