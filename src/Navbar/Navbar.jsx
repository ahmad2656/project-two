import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiHome3Fill } from "react-icons/ri";
import { DiJoomla } from "react-icons/di";
import { BiExclude } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { MdContactPage } from "react-icons/md";
import "./Navbar.css";
import Dark from "../Darkmode/Dark";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handle = () => {
    setClick(!click);
  };

  const [scrolled, setScrolled] = useState(false);
  const handles = () => {
    const offset = window.scrollY;
    setScrolled(offset > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handles);
    return () => {
      window.removeEventListener("scroll", handles);
    };
  }, []);
  return (
    <>
      <div className={`navbar ${scrolled ? "scrolledd" : ""}`}>
        <div>
          <img src="fl.webp" alt="" id="logo" />
        </div>
        <ul className={click ? "links active" : "links"}>
          <li className="lists">
            <NavLink onClick={() => setClick(false)} to="/">
              <RiHome3Fill className="icons" /> Home
            </NavLink>
            <NavLink onClick={() => setClick(false)} to="/About">
              <DiJoomla className="icons" /> About
            </NavLink>
            <NavLink onClick={() => setClick(false)} to="/Services">
              <BiExclude className="icons" /> Services
            </NavLink>
            <NavLink onClick={() => setClick(false)} to="/Contact">
              <MdContactPage className="icons" /> Contact
            </NavLink>
          </li>
        </ul>
        <div className="burger" onClick={handle}>
          {click ? (
            <FaTimes className="moons" style={{ color: "white" }} />
          ) : (
            <FaBars className="moons" style={{ color: "white" }} />
          )}
        </div>
        <NavLink onClick={() => setClick(false)} id="gm-ic" to="/Login">
          Login
        </NavLink>
        <Dark />
      </div>
    </>
  );
};

export default Navbar;
