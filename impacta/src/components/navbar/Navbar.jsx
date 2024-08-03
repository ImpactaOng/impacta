import React from "react";
import logo from "../../assets/logoImpacta.png";

export default function () {
    return (
        <div>
            <nav className="flex justify-around items-center bg-white w-{100%} h-32">
                <img className="h-18 cursor-pointer" src={logo} alt="" />
                <ul className=" text-black  font-semibold flex justify-center items-center gap-16 text-xl">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Quem Somos</li>
                    <li className="cursor-pointer text-corPrincipal">Quiz</li>
                    <li className="cursor-pointer text-corPrincipal">
                        Mapeamento
                    </li>
                </ul>
                <div className="flex justify-center items-center gap-3">
                    <div className="w-40 h-12 flex items-center justify-center border-4 border-corSecudanria rounded-2xl cursor-pointer">
                        <p className="text-corSecudanria font-semibold text-xl">
                            Entrar
                        </p>
                    </div>
                    <div className="w-1 h-12 bg-corSecudanria"></div>
                    <div className="w-40 h-12 flex items-center justify-center bg-corSecudanria rounded-2xl cursor-pointer">
                        <p className="text-white font-semibold text-xl">
                            Cadastre-se
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    );
}
