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

    return (
        <section className="bg-fundoSecundario h-96 w-full flex items-center justify-around">
            <Swiper
                slidesPerView={slidePerView}
                loop={true}
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                className="w-full h-full flex justify-center items-center"
            >
                <SwiperSlide className="!w-full  flex justify-center items-center s1180:!w-2/4 s1380:!w-2/6">
                    <CardValue title="NOSSA MISSÃO"/>
                </SwiperSlide>

                <SwiperSlide className="!w-full  flex justify-center items-center s1180:!w-2/4 s1380:!w-2/6">
                    <CardValue title="VISÃO"/>
                </SwiperSlide>

                <SwiperSlide className="!w-full flex justify-center items-center s1180:!w-2/4 s1380:!w-2/6">
                    <CardValue title="VALORES"/>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Values;
