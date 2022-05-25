/* eslint-disable react/jsx-no-target-blank */
import React from "react";
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


//projects 
//https://medium.com/how-to-react/create-beautiful-image-sliders-carousels-in-react-using-react-alice-carousel-395d8ae9310c

// const images = ['./public/img/Slider/Ficheiro_1.jpg'];




const imagesCarousel = [
  { url: "./img/Slider/Ficheiro_1.jpg" },
  { url: "./img/Slider/Ficheiro_2.jpg" },
  { url: "./img/Slider/Ficheiro_3.jpg" },

];
const cardsConst = [
  {urlImage: "./img/Slider/Ficheiro_1.jpg", alt: "Image 1", url: "#", text: "Recording" },
  {urlImage: "./img/Slider/Ficheiro_2.jpg", alt: "Image 2", url: "#", text: "Mixing" },
  {urlImage: "./img/Slider/Ficheiro_3.jpg", alt: "Image 3", url: "#", text: "Mastering" }
];
const welcomeTo = [
  { title: "Welcome" +<br/>+ "to our" +<br/> +"studio", textContent: "We are a recording studio located in New York City. We cover everything from epic original tracks to talent management, licensing, sound recording and design."}
];

const workingArtists = [
  {artistName: "Ricko Sicko"},
  {artistName: "Raptil"},
  {artistName: "Ricko Sicko"},
  {artistName: "Raptil"}
  
];

const studios = [

{urlImage: "./img/Studio/Ficheiro_1.jpg", alt: "Image Studio A", heading: "Studio A", 
textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, neque at mattis volutpat, enim diam ultricies est, at egestas elit lacus at tellus. Mauris feugiat non tortor vel fermentum. Fusce arcu neque, tincidunt quis magna eget, convallis volutpat ligula.", 
btnUrl: "#", btnText: "Book session" }

];

const featuredWorks = [
  {urlImage:"./img/Works/artwork_lowkey.jpg", artistName:"Ricko Sicko", songName:"LOWKEY", year:"2022",
   YoutubeLink:"https://www.youtube.com/watch?v=FKZThNEChyo", 
   SpotifyLink:"https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0", 
   ArtistInsta:"htttps://www.instagram.com/ricardoventuras"},
   
   {urlImage:"./img/Works/artwork_lowkey.jpg", artistName:"Raptil", songName:"Pensamento Clean",year:"2022",
   YoutubeLink:"https://www.youtube.com/watch?v=FKZThNEChyo", 
   SpotifyLink:"https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0", 
   ArtistInsta:"htttps://www.instagram.com/ricardoventuras"},
   
   {urlImage:"./img/Works/artwork_lowkey.jpg", artistName:"Ricko Sicko", songName:"Sacrifícios", year:"2021",
   YoutubeLink:"https://www.youtube.com/watch?v=FKZThNEChyo", 
   SpotifyLink:"https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0", 
   ArtistInsta:"htttps://www.instagram.com/ricardoventuras"}
];

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};



export default function Index() {
  return (
    <>
      <IndexNavbar fixed />

      <AliceCarousel autoPlay autoPlayInterval="1500" autoHeight="true" touchTracking="true" disableButtonsControls="true" className="classAliceCarousel">
        {imagesCarousel.map((e, key) => <img key={key} src={e.url} alt="image_{e.url}"></img>)}
      </ AliceCarousel>
      {/* <img className="content_cima_slider absolute w-1/12 h-1/12 object-cover " alt="preenchimento" src="./img/brand/hero-dot.png"/> */}

      <div className="w-full md:w-full px-6">
        <div className="flex flex-wrap justify-center">
          
          {cardsConst.map((e, key) => <div className="w-1/3 md:w-1/3 px-4">
            <div key={key} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href={e.url}>
                <img className="rounded-t-lg" src={e.urlImage} alt={e.alt} />
              </a>
              <a href={e.url} className="justify-center">
                <h5 className="mb-2 absolute  text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{e.text}</h5>
              </a>
              <div className="p-5">
              </div>
            </div>
          </div>)}
         
        </div>
      </div>


      <section className="mt-5 md:mt-5 pb-20 pt-20 relative bg-black">
        <div className="container mx-auto ">
        {welcomeTo.map((e, key)=> 
          <div  className=" w-full md:w-full flex justify-center px-6">
            <div className=" mb-2 ">
              <h2 key={key} className="text-6xl text-white font-bold text-right px-6 leading-4"> WELCOME <br/> TO OUR <br/> STUDIO  </h2>
            </div>
            <div className=" flex mb-2 items-center">
              <p key={key} className="text-xl text-white px-6 leading-4">{e.textContent}</p>
            </div>
          </div>
        )}
        </div>
      </section>

      <section className=" pb-20 pt-20 relative bg-white studio_background">
        <div className="container mx-auto ">
        {studios.map((e, key)=> 
          <div  className=" w-full md:w-full flex justify-center px-6">
            <div className="w-full md:w-full mb-2 text-center">
              <h2 key={key} className=" width_fit mx-auto text-4xl text-white border-solid border-b-6 pb-2 font-bold text-center px-6 leading-4"> 
                {e.heading.toUpperCase()} 
              </h2>
              <p key={key} className="text-xl text-white px-6 leading-4 mb-6">
                {e.textContent}
              </p>
              <a href={e.btnUrl} className="a_btn">{e.btnText}</a>
            </div>
          </div>
        )}
        </div>
      </section>
      
      <section className="pb-20 pt-20 relative bg-black">
        <div className="container mx-auto">
        <div  className=" w-full md:w-full flex justify-center px-6 mb-6">
            <h2 className="text-6xl text-white font-bold text-right px-6 leading-4"> OS NOSSOS <br/> TRABALHOS </h2>
            <div className="flex mb-2 items-center">
              <p className="text-xl text-white px-6 leading-4">During the last few years, we’ve met several great people. Here’s a list to name a few.</p>
            </div>
          </div>
        <div  className=" w-full md:w-full flex justify-center px-6">
          <div className="w-full md:w-full flex flex-wrap justify-left">
            {workingArtists.map((e, key)=> 
              <div key={key} className="w-1/3 md:w-1/3 text-left mb-2 ">
                <p key={key} className="text-white">{e.artistName}</p>
              </div>
            )}
          </div>
        </div>
        </div>
      </section>

      {/* client lists */}
      <section className="pb-20 pt-20 relative bg-white">
        <div className="container mx-auto">
        <div  className=" w-full md:w-full flex justify-center px-6 mb-6">
            <h2 className="text-6xl text-black font-bold text-right px-6 leading-4"> TRABALHOS <br/> REALIZADOS </h2>
            <div className="flex mb-2 items-center">
              <p className="text-xl text-black px-6 leading-4">During the last few years, we’ve met several great people. Here’s a list to name a few.</p>
            </div>
          </div>
        <div  className=" w-full md:w-full flex justify-center px-6">
          <div className="w-full md:w-full flex flex-wrap justify-left">
            {featuredWorks.map((e, key)=> 
              <div key={key} className="w-1/3 md:w-1/3 text-left mb-2 mx-auto featuredWorksDiv ">
                <div className="featuredWorks_uppertext p-2">
                  <h2 className="text-white"> {e.songName} </h2>
                  <h4 className="text-white"> por {e.artistName} </h4>
                  <h4 className="text-white">{e.year}</h4>
                </div>
               <img className="p-2 featuredWorks" src={e.urlImage} alt={e.artistName + e.songName} />
                <div className="featuredWorks_bottomtext p-2">
                  <a href={e.YoutubeLink}><FaYoutube /></a>
                  <a href={e.SpotifyLink}><FaSpotify /></a>
                  <a href={e.ArtistInsta}><FaInstagram /></a>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
