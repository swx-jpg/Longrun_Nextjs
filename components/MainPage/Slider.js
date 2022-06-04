import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const imagesCarousel = [
    { key: 2, url: "./img/Slider/Ficheiro_2.jpg", title: "Transformamos as tuas ideias em realidade", subText: "Fala connosco.", btnText: "Contacte-nos", btnUrl: "#" },
    { key: 3, url: "./img/Slider/Ficheiro_3.jpg", title: "Transformamos as tuas ideias em realidade", subText: "Fala connosco.", btnText: "Contacte-nos", btnUrl: "#" }
  
  ];


//projects 
//https://medium.com/how-to-react/create-beautiful-image-sliders-carousels-in-react-using-react-alice-carousel-395d8ae9310c

export default function Slider() {
    return (
    <AliceCarousel autoPlay autoPlayInterval="1500" autoHeight="true" touchTracking="true" disableButtonsControls="true" className="classAliceCarousel">
        
        {imagesCarousel.map((e, key) =>
          <div key={key} className=" w-full  flex justify-center sliderMaxHeight">
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
    );
}