import React from "react";
import { FaInstagram, FaYoutube, FaSpotify, FaRegEnvelope} from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">Vamos falar sobre o seu projeto!</h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Encontre-nos em qualquer destas plataformas, nós respondemos em 1-2 dias úteis.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
               
                <a href="#"><FaRegEnvelope /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaSpotify /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
            
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()} Longrun Music by{" "}
                <a
                  href="https://www.instagram.com/afonso_rufino/"
                  className="text-white hover:text-white"
                >
                  Swx
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
