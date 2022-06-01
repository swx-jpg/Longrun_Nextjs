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
            <div className="w-full  px-4 text-center">
              <h4 className="text-3xl font-semibold text-white">Vamos falar sobre o seu projeto!</h4>    


              <h5 className="text-lg mt-0 mb-2 text-white px-4">
                Encontre-nos em qualquer destas plataformas, nós respondemos em 1-2 dias úteis.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 inline-flex ">
               
                <a href="mailto:longrunmusicrec@gmail.com"><FaRegEnvelope /></a>
                <a href="https://www.youtube.com/channel/UCW0pMfYwk116gM9oYtHty2Q"><FaYoutube /></a>
                <a href="https://open.spotify.com/user/31f7zklukv6vnmejbyyeeellrzba?si=c9175162fb9047b9"><FaSpotify /></a>
                <a href="https://www.instagram.com/longrunmusic/"><FaInstagram /></a>
                <p className="text-white font-bold mx-10px pt-10px">ou</p>
                <a data-tf-popup="V1X1ud9P" className="aTypeFormFooter text-3xl  font-semibold text-white" data-tf-iframe-props="title=Booking Form Template (Longrun)" data-tf-medium="snippet" >Clique aqui</a><script src="//embed.typeform.com/next/embed.js"></script>

              </div>
            </div>
            
          </div>
          <hr className="my-6 border-white" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full  px-4 mx-auto text-center">
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
