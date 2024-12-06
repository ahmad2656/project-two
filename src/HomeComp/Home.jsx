import React from "react";
import "./Home.css";
import Homefirst from "./Homefirst";
import Homesecond from "./Homesecond";
import Homethird from "./Homethird";
import Homefour from "./Homefour";
import Homefive from "./Homefive";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Homefirst />
      <Homesecond />
      <Homethird />
      <Homefour />
      <section className="ext-fo-sec">
        <Homefive />
      </section>
      <Footer />
    </>
  );
};

export default Home;
