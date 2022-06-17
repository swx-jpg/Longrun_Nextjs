import {React, useEffect} from "react";
import { motion, useAnimation } from "framer-motion"
import {useInView} from 'react-intersection-observer';


const cardsConst = [
    { key: 1, urlImage: "./img/Slider/Ficheiro_3.jpg", alt: "Image 1", url: "#", text: "Gravação", animation: 'animation' },
    { key: 2, urlImage: "./img/Slider/Ficheiro_2.jpg", alt: "Image 2", url: "#", text: "Mixing/Mastering", animation: 'animationReverse' },
    { key: 3, urlImage: "./img/Slider/Ficheiro_1.jpg", alt: "Image 3", url: "#", text: "Vídeo", animation: 'animationReverse' }
];

export default function CardsAfterSlider() {
    
    const { ref, inView } = useInView({
        threshold: 0.4
    });
    const animation  = useAnimation();


    useEffect(() => {
        //when ref object is inView, inView returns true and useEffect code runs
        animation.start({
            x: '-100vw',
            y: 0,
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
                x: '100vw',
                y: '0vh',
                transition: {
                    type: 'spring', duration: 2, bounce: 0.3
                }
            });
        }
    }, [inView]);

    return (
        <div className=" w-full justify-center px-6  bg-black topOverSlider">
            <div
                ref={ref}
                className="w-full md:w-full flex flex-wrap justify-left z-20">

                {cardsConst.map((e, key) =>
                    <motion.div
                        key={key}
                        className="w-1/3 mb-10 px-4 relative divCards cardsServices z-20"
                        animate={animation}>
                        <a href={e.url}>
                            <img src={e.urlImage} alt={e.alt} />
                        </a>
                        <a href={e.url} className="justify-center">
                            <h5 className="mb-2 p-2  bg-black  border centerTextOverImage text-2xl font-bold tracking-tight text-white dark:text-white ">{e.text}</h5>
                        </a>
                    </motion.div>)}

            </div>
        </div>
    );
}