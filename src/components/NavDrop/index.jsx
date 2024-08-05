import React, { useState } from "react";
import MenuButton from "../MenuButton";

const NavDrop = ({ handleNavDrop, openNavDrop }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className="fixed top-0 z-50 bg-white w-full h-screen flex flex-col items-center justify-center">
            <ul className="h-2/5 flex flex-col justify-around items-center font-bold">
                <li>Início</li>
                <li>Quem Somos</li>
                <li className="text-corPrincipal">Quiz</li>
                <li className="text-corPrincipal">Mapeamento</li>
            </ul>

            <div className="flex flex-col  w-4/5 justify-around items-center h-32 s480:flex-row s780:w-6/12 s1080:w-5/12">
                <div className="w-40 h-12 flex items-center justify-center border-4 border-corSecudanria rounded-2xl cursor-pointer">
                    Entrar
                </div>
                <div className="w-40 h-12 flex items-center justify-center bg-corSecudanria rounded-2xl cursor-pointer">
                    Cadastrar-se
                </div>
            </div>

            <div className="absolute top-8 left-8">
                <MenuButton
                    handleNavDrop={handleNavDrop}
                    openNavDrop={openNavDrop}
                />
            </div>
        </nav>
    );
};

export default NavDrop;
