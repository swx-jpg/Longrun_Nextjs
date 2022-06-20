/* eslint-disable react/jsx-no-target-blank */
import { React, useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";

import CircleIndicator from 'components/MainPage/CircleIndicator.js'
import Slider from "components/MainPage/Slider.js";
import CardsAfterSlider from "components/MainPage/CardsAfterSlider.js";
import WelcomeToSection from "components/MainPage/WelcomeToSection.js";
import WorkingArtists from "components/MainPage/WorkingArtists.js";
import Works from "components/MainPage/Works.js";
import Footer from "components/Footers/Footer.js";

import StudioA from "components/MainPage/StudioA";





export default function Index() {

  
  useEffect(() => {
    // Client-side-only code
    window.addEventListener('scroll', (e) => {

      const nav = document.querySelector('#idNavHeader');
      if (window.pageYOffset > 0) {
        nav.classList.add("navScrolled");
        nav.classList.remove("navFixed");
      } else {
        nav.classList.remove("navScrolled");
        nav.classList.add("navFixed");
      }
    });
  });

  return (
    <>
      <IndexNavbar fixed />
      
      <Slider />
      <CardsAfterSlider />
      <WelcomeToSection />
      <StudioA />
      <WorkingArtists />
      <Works />
      <CircleIndicator />
      <Footer />

      
    </>
  );
}
