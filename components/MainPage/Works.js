import React from "react";
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

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

export default function Works() {
    return (
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
                <img  className="w-full p-2 featuredWorks" src={e.urlImage} alt={e.artistName + e.songName} />
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
    );
}