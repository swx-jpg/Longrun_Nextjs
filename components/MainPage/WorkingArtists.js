import React from "react";

const workingArtists = [
    { key: 1, artistName: "Ricko Sicko" },
    { key: 2, artistName: "Raptil" }
  ];

export default function WelcomeToSection() {
    return (
        <section className="pb-20 pt-20 relative bg-black">
            <div className=" w-full md:w-full flex fullwidthTitle justify-center px-6 mb-6">
                <div className="  w-1/3 sm:w-full mb-2">
                    <h2 className="text-5xl text-white font-bold text-right title px-6 leading-4"> OS NOSSOS <br /> ARTISTAS</h2>
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
    );
}