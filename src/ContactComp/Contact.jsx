import React from "react";
import Contactfirst from "./Contactfirst";
import Contactsecond from "./Contactsecond";
import Footer from "../HomeComp/Footer";

const Contact = () => {
  return (
    <>
      <Contactfirst />
      <Contactsecond />
      <section className="fo-ex">
        <Footer />
      </section>
    </>
  );
};

export default Contact;
