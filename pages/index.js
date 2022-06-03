/* eslint-disable react/jsx-no-target-blank */
import { React, useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Slider from "components/MainPage/Slider.js";
import CardsAfterSlider from "components/MainPage/CardsAfterSlider.js";
import WelcomeToSection from "components/MainPage/WelcomeToSection.js";
import WorkingArtists from "components/MainPage/WorkingArtists.js";
import Works from "components/MainPage/Works.js";
import Footer from "components/Footers/Footer.js";

import { motion, useViewportScroll, useAnimation } from "framer-motion"
import {useInView} from 'react-intersection-observer';
import StudioA from "components/MainPage/StudioA";


export default function Index() {

  const { scrollYProgress } = useViewportScroll();
  
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
      
      {/* <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
      /> */}

      <Slider />
      <CardsAfterSlider />
      <WelcomeToSection />
      <StudioA />
      <WorkingArtists />
      <Works />

      <Footer />
    </>
  );
}
