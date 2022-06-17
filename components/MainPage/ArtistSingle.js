import React from "react";

import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

const artists = [
    {
        artistUrl: "ricko-sicko", imgUrl: "./img/artists/ventura_Profile.jpg", artistName: "Ricko Sicko", 
        spotifyLink: "", youtubeLink: "", instagramLink:"",
        description: "",
        songs:[
        {
            urlImage: "./img/Works/artwork_lowkey.jpg", 
            artistName: "Ricko Sicko", songName: "LOWKEY", year: "2022",
            YoutubeLink: "https://www.youtube.com/watch?v=FKZThNEChyo",
            SpotifyLink: "https://open.spotify.com/track/2T3c9GztOwjOgo5io1qyVZ?si=7ca31d7b3f8a4cb0"
        },

        { urlImage: "./img/Works/artwork_Sacrificios.jpeg",
        artistName: "Ricko Sicko", songName: "Sacrifícios", year: "2021",
        YoutubeLink: "https://www.youtube.com/watch?v=zKlHUYGG3qc",
        SpotifyLink: "https://open.spotify.com/track/7FxLDllwOFxDYvckxKZb9S?si=d7559e5ed17e4d0e&nd=1"
        }
    ]
    }
];

export default function StudioA() {
    return (
        <section className=" pb-20 pt-20 relative bg-white ">

            {artists.map((e, key) =>
                <div key={key} className=" w-full md:w-full flex justify-center px-6">
                    <div className="w-1/2 sm:w-1/2 mb-2 text-center">
                        <img className="" src={e.imgUrl}/>
                    </div>
                    <div className="w-1/2 sm:w-1/2 mb-2 text-center">
                        <h2>{e.artistName}</h2>
                    </div>
                    <a  href={e.YoutubeLink}><FaYoutube /> </a>
                    <a  href={e.SpotifyLink}><FaSpotify /> </a>
                    <a  href={e.ArtistInsta}><FaInstagram /> </a>
                </div>
            )}

        </section>
    );
}