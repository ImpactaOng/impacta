import React from "react";
import trilhaUm from "../../assets/fotoTrilhaUm.png";
import { BotaoTrilha } from "./BotaoTrilha";
import fotoTrilhaHd from "../../assets/fotoTrilhaHd.png";
import { Link } from "react-router-dom";

export const Trilhas = () => {
    const dataBotaoTrilha = [
        {
            pergunta: "O que são Enchentes e Como Elas Afetam Nossa Vida?",
        },

        {
            pergunta: "Por Que as Enchentes Estão se Tornando Mais Frequentes?",
        },

        {
            pergunta: "Quais São os Impactos Devastadores das Enchentes?",
        },

        {
            pergunta: "Como Podemos Prevenir e Mitigar Enchentes?",
        },

        {
            pergunta: "Existem Exemplos de Sucesso na Luta Contra Enchentes?",
        },
    ];
    return (
        <section className="bg-fundoPrincipal h-full w-full flex items-start justify-center">
            <div className="flex flex-col w-full items-center justify-center gap-10">
                <h2 className="text-4xl text-center text-white w-72 s580:text-5xl s580:w-96 s1080:w-4/5">
                    Porque <span className="text-corPrincipal">ocorrem</span> as
                    enchentes?
                </h2>
                <img
                    className="s580:w-4/5 s1080:hidden"
                    src={trilhaUm}
                    alt=""
                />
                <img className="hidden s1080:flex" src={fotoTrilhaHd} alt="" />
                <div className="flex flex-col gap-2 w-full justify-center items-center s1280:{96} ">
                    {dataBotaoTrilha.map((botaoTrilha, index) => (
                        <BotaoTrilha key={index} dados={botaoTrilha} />
                    ))}
                </div>
                <div className="w-72 h-14 bg-corPrincipal rounded-xl flex items-center justify-center cursor-pointer">
                    <Link
                        to={"/quiz"}
                        className="text-3xl font-semibold text-white"
                    >
                        Quiz
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Trilhas;
