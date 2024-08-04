import React, { useEffect, useState } from "react";
import CardValue from "../../components/CardValue";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const Values = () => {
    const [slidePerView, setSlidePerView] = useState(1);

    useEffect(() => {
        const handlResize = () => {
            if (window.innerWidth >= 1180) {
                setSlidePerView(2);
            }
            if (window.innerWidth < 1180) {
                setSlidePerView(1);
            }
            if (window.innerWidth >= 1380) {
                setSlidePerView(3);
            }
        };
        handlResize();

        window.addEventListener("resize", handlResize);

        return () => {
            window.removeEventListener("resize", handlResize);
        };
    }, []);

    const dataCard = [
        {
            title: "NOSSA MISSÃO",
            content:
                "Nossa missão é fornecer conhecimento acessível e de qualidade sobre as causas e prevenções das enchentes, capacitando comunidades e indivíduos a adotarem medidas preventivas eficazes. Através de uma plataforma interativa, oferecemos trilhas de aprendizado e mapeamento de regiões vulneráveis para promover a resiliência e a segurança ambiental.",
        },
        {
            title: "VISÃO",
            content:
                "Nossa visão é um mundo onde todas as comunidades estejam bem informadas e preparadas para enfrentar e mitigar os impactos das enchentes. Almejamos ser uma referência global em educação ambiental e em soluções de prevenção de desastres naturais, contribuindo para a construção de um futuro sustentável e seguro.",
        },
        {
            title: "VALORES",
            content:
                "Educação: Acreditamos que o conhecimento é a ferramenta mais poderosa para a prevenção de desastres. Comprometemo-nos a oferecer conteúdos educativos de alta qualidade que sejam acessíveis a todos.\n" + "Buscamos capacitar as comunidades a se tornarem mais resilientes, desenvolvendo habilidades e adotando medidas que minimizem os impactos das enchentes.",
        },
    ];

    return (
        <section className="bg-fundoSecundario h-96 w-full flex items-center justify-around">
            <Swiper
                slidesPerView={slidePerView}
                loop={true}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                className="w-full h-full flex justify-center items-center"
            >
                {dataCard.map((dado) => (
                    <SwiperSlide className="!w-full  flex justify-center items-center s1180:!w-2/4 s1380:!w-2/6">
                        <CardValue data={dado} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Values;
