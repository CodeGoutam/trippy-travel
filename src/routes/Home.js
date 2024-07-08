import React from "react";
import Navbar from "../Components/Navbar";
import { Hero } from "../Components/Hero";
import { Destination } from "../Components/destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />

      <Trip />
      <Footer />
    </>
  );
};
