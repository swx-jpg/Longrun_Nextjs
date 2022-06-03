import React from "react";

const studios = [
    {
        key: 1, urlImage: "./img/Studio/Ficheiro_1.jpg", alt: "Image Studio A", heading: "Estúdio A",
        textContent: "Este estúdio tem equipamento de gravação, colunas monitoras, cabine de gravação e isolamento, para que possa ter uma experiência de captação de áudio agradável.",
        btnText: "Contacte-nos"
    }
];

export default function StudioA() {
    return (
        <section className=" pb-20 pt-20 relative bg-white studio_background">

            {studios.map((e, key) =>
                <div key={key} className=" w-full md:w-full flex justify-center px-6">
                    <div className="w-full sm:w-full mb-2 text-center">
                        <h2 className=" text-5xl width_fit mx-auto text-white border-solid border-b-6 pb-2 font-bold text-center px-6 leading-4">
                            {e.heading.toUpperCase()}
                        </h2>
                        <p className="text-xl text-white px-6 leading-4 mb-6">
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
    );
}