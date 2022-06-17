import { React, useEffect, useState, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';


import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

const featuredWorks = [
  //image resolution 1300x1300 ou 3000x3000
  {
    key: 1, urlImage: "./img/Works/artwork_lowkey.jpg",
    artistName: "Ricko Sicko", songName: "LOWKEY", year: "2022",
    YoutubeLink: "https://www.youtube.com/watch?v=FKZThNEChyo",
    SpotifyLink: "https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0",
    ArtistInsta: "https://www.instagram.com/ricardoventuras/"
  },

  {
    key: 2, urlImage: "./img/Works/artwork_pensamentoClean.png",
    artistName: "Raptil", songName: "Pensamento Clean", year: "2022",
    YoutubeLink: "https://www.youtube.com/watch?v=bDk6q4219mw",
    SpotifyLink: "https://open.spotify.com/track/5f84wLErw3TjcsZE0bTHs8?si=c48aeba37a8948f9",
    ArtistInsta: "https://www.instagram.com/raptil_2560/"
  },

  {
    key: 3, urlImage: "./img/Works/artwork_Sacrificios.jpeg",
    artistName: "Ricko Sicko", songName: "Sacrifícios", year: "2021",
    YoutubeLink: "https://www.youtube.com/watch?v=zKlHUYGG3qc",
    SpotifyLink: "https://open.spotify.com/track/7FxLDllwOFxDYvckxKZb9S?si=d7559e5ed17e4d0e&nd=1",
    ArtistInsta: "https://www.instagram.com/ricardoventuras/"
  },

  {
    key: 4, urlImage: "./img/Works/artwork_lowkey.jpg",
    artistName: "Ricko Sicko", songName: "LOWKEY", year: "2022",
    YoutubeLink: "https://www.youtube.com/watch?v=FKZThNEChyo",
    SpotifyLink: "https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0",
    ArtistInsta: "https://www.instagram.com/ricardoventuras/"
  },

  {
    key: 5, urlImage: "./img/Works/artwork_pensamentoClean.png",
    Raptil: "Raptil", songName: "Pensamento Clean", year: "2022",
    YoutubeLink: "https://www.youtube.com/watch?v=bDk6q4219mw",
    SpotifyLink: "https://open.spotify.com/track/5f84wLErw3TjcsZE0bTHs8?si=c48aeba37a8948f9",
    ArtistInsta: "https://www.instagram.com/raptil_2560/"
  },

  {
    key: 6, urlImage: "./img/Works/artwork_lowkey.jpg",
    artistName: "Ricko Sicko", songName: "LOWKEY", year: "2022",
    YoutubeLink: "https://www.youtube.com/watch?v=FKZThNEChyo",
    SpotifyLink: "https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0",
    ArtistInsta: "https://www.instagram.com/ricardoventuras/"
  }

];


export default function Works() {
  const [works] = useState(featuredWorks);
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(3);
  const animation = useAnimation();
  const showMore = () => {
    if (numberOfitemsShown + 3 <= works.length) {
      setNumberOfItemsToShown(numberOfitemsShown + 3);
      document.getElementById("idBtnShowMore").style.display ="none";
    }else{
      setNumberOfItemsToShown(works.length);
    }
  };
  const itemsToShow = useMemo(() => {
    return works
      .slice(0, numberOfitemsShown)
      .map((work, index) =>
       <motion.div
        animate={animation}
        className="w-1/3 md:w-1/3 text-left mb-2 featuredWorksDiv">
          <div className="featuredWorks_uppertext p-2">
            <h2 className="text-white"> {work.songName} </h2>
            <h4 className="text-white"> por {work.artistName} </h4>
            <h4 className="text-white">{work.year}</h4>
          </div>
          <img className="w-full p-2 featuredWorks" src={work.urlImage} alt={work.artistName + work.songName} />
          <div className="featuredWorks_bottomtext p-2">
            <a href={work.YoutubeLink}><FaYoutube /></a>
            <a href={work.SpotifyLink}><FaSpotify /></a>
            <a href={work.ArtistInsta}><FaInstagram /></a>
          </div>
     </motion.div>
      );
  }, [works, numberOfitemsShown]);


  const { ref, inView } = useInView({
    threshold: 0.4
  });

  useEffect(() => {
    //when ref object is inView, inView returns true and useEffect code runs
    // TODO: está a passar duas vezes no onClick
  
    animation.start({
      x: 0,
      y: '100vh',
      transition: {
        type: 'spring', duration: 2, bounce: 0.3
      }
    });

    if (inView) {
      animation.start({
        x: 0,
        y: 0,
        transition: {
          type: 'spring', duration: 2, bounce: 0.3
        }
      });
    }

    if (!inView) {
      animation.start({
        x: 0,
        y: '100vh',
        transition: {
          type: 'spring', duration: 2, bounce: 0.3
        }
      });
    }
  }, [inView]);


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
      <div className=" w-full md:w-full justify-center px-6 container mx-auto">
        <div  ref={ref} className="w-full md:w-full flex flex-wrap justify-left limitedWorkElements">
          {itemsToShow.length ? itemsToShow : "Loading..."}
        </div>
      <div id="idBtnShowMore" className="w-full text-center">
        <button className="btnTypeForm" onClick={showMore}>Mostrar Mais</button>
      </div>

    </div>
    </section >
  );
}