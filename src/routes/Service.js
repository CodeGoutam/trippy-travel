import React from "react";
import Navbar from "../Components/Navbar";
import {Hero} from "../Components/Hero";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";
import ServicePage from "../Components/ServicePage";

export const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-sub"
        heroImg="https://images.unsplash.com/photo-1569390412444-c80c024169f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
        title="Service"
      />
      {/* <Trip/> */}
      <ServicePage />
      <Footer/>
    </>
  );
};
