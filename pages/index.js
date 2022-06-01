/* eslint-disable react/jsx-no-target-blank */
import { React, useEffect } from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
// import { FaSpotify } from '@react-icons/all-files/fa/FaSpotify';
// import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
// import { FaYoutubeSquare } from 'react-icons/fa';
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';
// import { FaInstagram, FaYouTube } from 'react-icons/fa';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import { motion, useViewportScroll, useAnimation } from "framer-motion"
import {useInView} from 'react-intersection-observer';

import { doc } from "prettier";


//projects 
//https://medium.com/how-to-react/create-beautiful-image-sliders-carousels-in-react-using-react-alice-carousel-395d8ae9310c

// const images = ['./public/img/Slider/Ficheiro_1.jpg'];




const imagesCarousel = [
  { key: 2, url: "./img/Slider/Ficheiro_2.jpg", title: "Transformamos as tuas ideias em realidade", subText: "Fala connosco.", btnText: "Contacte-nos", btnUrl: "#" },
  { key: 3, url: "./img/Slider/Ficheiro_3.jpg", title: "Transformamos as tuas ideias em realidade", subText: "Fala connosco.", btnText: "Contacte-nos", btnUrl: "#" }

];
const cardsConst = [
  { key: 1, urlImage: "./img/Slider/Ficheiro_3.jpg", alt: "Image 1", url: "#", text: "Gravação", animation: 'animation' },
  { key: 2, urlImage: "./img/Slider/Ficheiro_2.jpg", alt: "Image 2", url: "#", text: "Mixing/Mastering", animation: 'animationReverse' },
  { key: 3, urlImage: "./img/Slider/Ficheiro_1.jpg", alt: "Image 3", url: "#", text: "Vídeo", animation: 'animationReverse'  }
];
const welcomeTo = [
  { key: 1, title: "Welcome" + <br /> + "to our" + <br /> + "studio", textContent: "Somos um estúdio de gravação situado em Torres Vedras, Portugal. A nossa promessa é cobrir desde gravação de áudio, a gestão de artistas e planeamento e gravação de vídeo." }
];

const workingArtists = [
  { key: 1, artistName: "Ricko Sicko" },
  { key: 2, artistName: "Raptil" }

];

const studios = [

  {
    key: 1, urlImage: "./img/Studio/Ficheiro_1.jpg", alt: "Image Studio A", heading: "Estúdio A",
    textContent: "Este estúdio tem equipamento de gravação, colunas monitoras, cabine de gravação e isolamento, para que possa ter uma experiência de captação de áudio agradável.",
    btnText: "Contacte-nos"
  }

];

const featuredWorks = [
  //image resolution 1300x1300 ou 3000x3000
  {
    key: 1, urlImage: "./img/Works/artwork_lowkey.jpg", artistName: "Ricko Sicko", songName: "LOWKEY", year: "2022",
    YoutubeLink: "https://www.youtube.com/watch?v=FKZThNEChyo",
    SpotifyLink: "https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0",
    ArtistInsta: "https://www.instagram.com/ricardoventuras/"
  },

  {
    key: 2, urlImage: "./img/Works/artwork_pensamentoClean.png", artistName: "Raptil", songName: "Pensamento Clean", year: "2022",
    YoutubeLink: "https://www.youtube.com/watch?v=bDk6q4219mw",
    SpotifyLink: "https://open.spotify.com/track/5f84wLErw3TjcsZE0bTHs8?si=c48aeba37a8948f9",
    ArtistInsta: "https://www.instagram.com/raptil_2560/"
  },

  {
    key: 3, urlImage: "./img/Works/artwork_Sacrificios.jpeg", artistName: "Ricko Sicko", songName: "Sacrifícios", year: "2021",
    YoutubeLink: "https://www.youtube.com/watch?v=zKlHUYGG3qc",
    SpotifyLink: "https://open.spotify.com/track/7FxLDllwOFxDYvckxKZb9S?si=d7559e5ed17e4d0e&nd=1",
    ArtistInsta: "https://www.instagram.com/ricardoventuras/"
  }
];


const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};







export default function Index() {

  
  const { scrollYProgress } = useViewportScroll();
  const {ref, inView} = useInView({
    threshold: 0.4
  }); 
  // const {ref2, inView2} = useInView({
  //   threshold: 0.5
  // });
  const animation  = useAnimation();
  const animationWorks = useAnimation();
  // const animationReverse  = useAnimation();

  useEffect(()=> {
    //when ref object is inView, inView returns true and useEffect code runs
    animation.start({
      x:0,
      y:0,
      transition:{
        type: 'spring', duration: 2, bounce: 0.3
      }
    });

    if ( inView ) {
      animation.start({
        x:0,
        y:0,
        transition:{
          type: 'spring', duration: 2, bounce: 0.3
        }
      });
      
    }
      
    if ( !inView){
       animation.start({
         x: '100vw',
         y: '0vh',
         transition:{
           type: 'spring', duration: 2, bounce: 0.3
         }
       });
       
      
    }
    

  }, [inView]);
  
  // useEffect(()=> {
  //   //when ref object is inView, inView returns true and useEffect code runs

  //   animationWorks.start({
  //     x: 0,
  //     y: 0,
  //     transition:{
  //       type: 'spring', duration: 2, bounce: 0.3
  //     }
  //   });

  //   if ( inView ) {
      
  //     animationWorks.start({
  //       x: 0,
  //       y: '0vh',
  //       transition:{
  //         type: 'spring', duration: 2, bounce: 0.3
  //       }
  //     });
  //   }
      
  //   if ( !inView){
       
  //     animationWorks.start({
  //       x: '100vw',
  //       y: '0vh',
  //       transition:{
  //         type: 'spring', duration: 2, bounce: 0.3
  //       }
  //     });
  //   }
    

  // }, [inView]);

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


      <AliceCarousel autoPlay autoPlayInterval="1500" autoHeight="true" touchTracking="true" disableButtonsControls="true" className="classAliceCarousel">
        
        {imagesCarousel.map((e, key) =>
          <div key={key} className=" w-full  flex justify-center">
            <img  src={e.url} alt="image_{e.url}" />
            <div  className="w-full  mb-2 text-center centerTextOverImage">
              <h2  className=" mx-auto text-5xl text-white border-solid border-b-6 pb-4 font-bold text-center px-6 leading-4">
                {e.title.toUpperCase()}
              </h2>
              <p className="text-xl text-white px-6 leading-4 mb-6">
                {e.subText}
              </p>
              <button className="btnTypeForm leading-20" data-tf-popup="V1X1ud9P" data-tf-iframe-props="title=Booking Form Template (Longrun)" data-tf-medium="snippet" >
                <p className="leading-normal">
                  {e.btnText}
                </p>
              </button>
              
                <script src="//embed.typeform.com/next/embed.js"></script>
            </div>
          </div>
        )}

      </ AliceCarousel>
      

      <div className=" w-full justify-center px-6  bg-black topOverSlider">
        <div 
        ref={ref} 
        className="w-full md:w-full flex flex-wrap justify-left z-20">
          
          {cardsConst.map((e, key) =>
            <motion.div 
            key={key} 
            className="w-1/3 mb-10 px-4 relative divCards cardsServices z-20"
            animate={animation}
            >
              <a  href={e.url}>
                <img src={e.urlImage} alt={e.alt} />
              </a>
              <a  href={e.url} className="justify-center">
                <h5  className="mb-2 p-2  bg-black  border centerTextOverImage text-2xl font-bold tracking-tight text-white dark:text-white ">{e.text}</h5>
              </a>
            </motion.div>)}
     
        </div>
      </div>


      <section className="pb-20 pt-10 relative bg-black  ">

        {welcomeTo.map((e, key) =>
          <div key={key} className="w-full md:w-full flex fullwidthTitle justify-center px-6 ">
            <div className=" mb-2 w-1/3 sm:w-full ">
              <h2  className="text-5xl text-white font-bold text-right title px-6 leading-4"> BEM-VINDOS <br /> AO NOSSO <br /> ESTÚDIO  </h2>
            </div>
            <div className=" w-2/3 sm:w-full  justify-center px-mb-2 align-self-center ">
              <p className="text-xl text-white px-6 leading-4">{e.textContent}</p>
            </div>
          </div>
        )}

      </section>

      <section className=" pb-20 pt-20 relative bg-white studio_background">

        {studios.map((e, key) =>
          <div key={key} className=" w-full md:w-full flex justify-center px-6">
            <div  className="w-full sm:w-full mb-2 text-center">
              <h2  className=" text-5xl width_fit mx-auto text-white border-solid border-b-6 pb-2 font-bold text-center px-6 leading-4">
                {e.heading.toUpperCase()}
              </h2>
              <p  className="text-xl text-white px-6 leading-4 mb-6">
                {e.textContent}
              </p>
              <button className="btnTypeForm leading-20" data-tf-popup="V1X1ud9P" data-tf-iframe-props="title=Booking Form Template (Longrun)" data-tf-medium="snippet" >
                <p className="leading-normal">
                  {e.btnText}
                </p>
              </button>
              
                <script src="//embed.typeform.com/next/embed.js"></script>
            </div>
          </div>
        )}

      </section>

      <section className="pb-20 pt-20 relative bg-black">
        <div className=" w-full md:w-full flex fullwidthTitle justify-center px-6 mb-6">
          <div className="  w-1/3 sm:w-full mb-2">
            <h2 className="text-5xl text-white font-bold text-right title px-6 leading-4"> OS NOSSOS <br/> ARTISTAS</h2>
          </div>
          <div className="w-2/3 flex mb-2 items-center align-self-center">
            <p className="text-xl text-white px-6 leading-4 ">Aqui está uma lista de alguns artistas com quem trabalhamos de momento. Esperemos aumentar em breve.</p>
          </div>
        </div>
        <div className=" w-full md:w-full flex flex-wrap justify-center artistList">
          <div className="w-full md:w-full flex flex-wrap justify-left p-4 pb-0">
            
            {workingArtists.map((e, key) =>
            
              <div key={key} className="w-1/2 md:w-1/2 text-center mb-2 pl-2 ">
                <p className="text-white">{e.artistName}</p>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* client lists */}
      <section className="pb-20 pt-20 relative bg-white">
        <div className=" w-full sm:w-full justify-center flex fullwidthTitle px-6 mb-6">
          <div className="w-1/3 sm:w-full mb-2">
            <h2 className="text-5xl text-black font-bold title text-right px-6 leading-4"> TRABALHOS <br /> REALIZADOS </h2>
          </div>
          <div className=" w-2/3 sm:w-full mb-2 items-center align-self-center">
            <p className="text-xl text-black px-6 leading-4">Estes são alguns dos nossos lançamentos mais recentes. Sinta-se à vontade para nos contactar em caso de dúvidas.</p>
          </div>
        </div>
        <div className=" w-full justify-center px-6 container mx-auto">
          <div  className="w-full md:w-full flex flex-wrap justify-left">
            
            {featuredWorks.map((e, key) =>
              <div 
              key={key} 
              className="w-1/3 md:w-1/3 text-left mb-6 featuredWorksDiv "
              
              >
                <div  className="featuredWorks_uppertext p-2">
                  <h2 className="text-white"> {e.songName} </h2>
                  <h4 className="text-white"> por {e.artistName} </h4>
                  <h4  className="text-white">{e.year}</h4>
                </div>
                <img  className="p-2 featuredWorks" src={e.urlImage} alt={e.artistName + e.songName} />
                <div  className="featuredWorks_bottomtext p-2">
                  <a  href={e.YoutubeLink}><FaYoutube /></a>
                  <a  href={e.SpotifyLink}><FaSpotify /></a>
                  <a  href={e.ArtistInsta}><FaInstagram /></a>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
