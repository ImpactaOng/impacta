import React, { useState } from "react";
import logo from "../../assets/logoImpacta.png";
import NavDrop from "../NavDrop";
import MenuButton from "../MenuButton";

export default function Navbar() {
    const [openNavDrop, setOpenNavDrop] = useState(false);
    const handleNavDrop = () => {
        setOpenNavDrop(!openNavDrop);
    };

    console.log(openNavDrop);

    return (
        <nav className="flex flex-row-reverse justify-around items-center bg-white w-{100%} h-32 relative s1180:flex-row ">
            <img className="h-10 cursor-pointer" src={logo} alt="" />

            <MenuButton
                handleNavDrop={handleNavDrop}
                openNavDrop={openNavDrop}
            />

            <div className="w-9/12 items-center justify-around hidden s1180:flex">
                <ul className=" text-black  font-semibold flex justify-center items-center gap-16 text-xl">
                    <li className="cursor-pointer s1180:text-base s1380:text-xl">
                        Início
                    </li>
                    <li className="cursor-pointer s1180:text-base s1380:text-xl">
                        Quem Somos
                    </li>
                    <li className="cursor-pointer text-corPrincipal s1180:text-base s1380:text-xl">
                        Quiz
                    </li>
                    <li className="cursor-pointer text-corPrincipal s1180:text-base s1380:text-xl">
                        Mapeamento
                    </li>
                </ul>
                <div className="flex justify-center items-center gap-3">
                    <div className="w-40 h-12 flex items-center justify-center border-4 border-corSecudanria rounded-2xl cursor-pointer s1180:w-32 s1180:h-11 s1380:w-40 s1380:h-12">
                        <p className="text-corSecudanria font-semibold text-xl">
                            Entrar
                        </p>
                    </div>
                    <div className="w-1 h-12 bg-corSecudanria  s1180:h-11"></div>
                    <div className="w-40 h-12 flex items-center justify-center bg-corSecudanria rounded-2xl cursor-pointer s1180:w-32 s1180:h-11 s1380:w-40 s1380:h-12">
                        <p className="text-white font-semibold text-xl">
                            Cadastre-se
                        </p>
                    </div>
                </div>
            </div>
            {openNavDrop && (
                <NavDrop
                    handleNavDrop={handleNavDrop}
                    openNavDrop={openNavDrop}
                />
            )}
        </nav>
    );
}
