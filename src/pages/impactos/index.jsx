import React from "react";
import impactoUm from "../../assets/impactoUm.png";
import impactoDois from "../../assets/impactoDois.png";
import impactoTres from "../../assets/impactoTres.png";

export default function Impactos() {
    return (
        <section className="bg-fundoPrincipal h-auto w-full flex items-center justify-around gap-7 flex-col ">
            <h2 className="text-white w-72 text-2xl text-center bg-red-600flex font-semibold my-6 s1180:text-4xl s1180:w-96">
                Principais <span className="text-corPrincipal">impactos</span>{" "}
                das mudanças climáticas
            </h2>
            <div className="flex  flex-col gap-18 h-[70%] w-4/5 justify-center items-center gap-x-4 gap-6 mb-8 s1180:flex-row ">
                <img
                    className="w-full h-60 s480:w-4/5 s680:w-3/5 s880:w-2/4 s1180:h-full s1180:w-96 "
                    src={impactoUm}
                    alt=""
                />
                <div className="flex flex-col w-full  items-center gap-6 s1180:w-96 s1180:h-full s1180:gap-2 ">
                    <img
                        className="w-full h-60 s480:w-4/5 s680:w-3/5 s880:w-2/4 s1180:w-full"
                        src={impactoDois}
                        alt=""
                    />
                    <img
                        className="w-full h-60 s480:w-4/5 s680:w-3/5 s880:w-2/4 s1180:w-full"
                        src={impactoTres}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}
