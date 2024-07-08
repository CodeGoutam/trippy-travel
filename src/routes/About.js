import React from "react";
import Navbar from "../Components/Navbar";
import { Hero } from "../Components/Hero";
import Footer from "../Components/Footer";
import AboutData from "../Components/AboutData";

export const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-sub"
        heroImg="https://images.unsplash.com/photo-1570692111688-be3d16f59c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="About"
        btnClass="hide"
      />
      <AboutData/>
      <Footer />
    </>
  );
};
