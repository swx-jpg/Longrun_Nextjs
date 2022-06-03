import React from "react";


const welcomeTo = [
    { key: 1, title: "Welcome" + <br /> + "to our" + <br /> + "studio", textContent: "Somos um estúdio de gravação situado em Torres Vedras, Portugal. A nossa promessa é cobrir desde gravação de áudio, a gestão de artistas e planeamento e gravação de vídeo." }
];


export default function WelcomeToSection() {
    return (
        <section className="pb-20 pt-10 relative bg-black  ">

            {welcomeTo.map((e, key) =>
                <div key={key} className="w-full md:w-full flex fullwidthTitle justify-center px-6 ">
                    <div className=" mb-2 w-1/3 sm:w-full ">
                        <h2 className="text-5xl text-white font-bold text-right title px-6 leading-4"> BEM-VINDOS <br /> AO NOSSO <br /> ESTÚDIO  </h2>
                    </div>
                    <div className=" w-2/3 sm:w-full  justify-center px-mb-2 align-self-center ">
                        <p className="text-xl text-white px-6 leading-4">{e.textContent}</p>
                    </div>
                </div>
            )}

        </section>
    );
}