import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [changeMode, setChangeMode] = useState(false);

    const handleMode = () => {
        setChangeMode(!changeMode);
    };

    const active = "bg-corPrincipal ";
    const desative = "border-2 border-stone-800 ";

    return (
        <section className="w-full h-screen  bg-[url('./assets/bacground-login-m.png')] bg-no-repeat bg-center bg-cover flex justify-center items-center">
            <div className=" w-full bg-corSecudanria bg-opacity-85 h-screen flex flex-col items-center justify-center gap-8 s780:w-4/5 s780:h-5/6 s780:rounded-2xl s1080:w-3/5 s1380:w-2/4">
                <div className="flex w-4/5 justify-around">
                    <div
                        className={`w-2/5 h-12 flex justify-center items-center  rounded-2xl text-white cursor-pointer ${
                            changeMode ? desative : active
                        }`}
                        onClick={() => setChangeMode(false)}
                    >
                        Cadastro
                    </div>
                    <div
                        className={`w-2/5 h-12 flex justify-center items-center  rounded-2xl text-white cursor-pointer ${
                            changeMode ? active : desative
                        }`}
                        onClick={() => setChangeMode(true)}
                    >
                        Login
                    </div>
                </div>

                <h2 className="text-white text-2xl">
                    {!changeMode ? "Cadastro" : "Login"}
                </h2>

                <div className="w-4/5 h-2/3 flex flex-col justify-center items-center gap-6 s780:h-4/6 ">
                    {!changeMode ? (
                        <form className="w-full h-4/6 flex flex-col justify-between s780:h-4/5">
                            <input
                                type="text"
                                placeholder="Nome"
                                className="h-14 rounded-2xl bg-white bg-opacity-20 px-6 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="E-mail"
                                className="h-14 rounded-2xl bg-white bg-opacity-20 px-6 outline-none"
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                className="h-14 rounded-2xl bg-white bg-opacity-20 px-6 outline-none"
                            />
                            <input
                                type="password"
                                placeholder="Confirmar Senha"
                                className="h-14 rounded-2xl bg-white bg-opacity-20 px-6 outline-none"
                            />
                        </form>
                    ) : (
                        <form className="w-full h-4/6 flex flex-col justify-center gap-6 s780:h-2/4">
                            <input
                                type="text"
                                placeholder="E-mail"
                                className="h-14 rounded-2xl bg-white bg-opacity-20 px-6 outline-none"
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                className="h-14 rounded-2xl bg-white bg-opacity-20 px-6 outline-none"
                            />
                        </form>
                    )}

                    <div
                        className="w-full h-12 flex justify-center items-center bg-corPrincipal rounded-2xl text-white cursor-pointer"
                        onClick={() => setChangeMode(true)}
                    >
                        <Link to={"/"}>
                            {!changeMode ? "Cadastro" : "Login"}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
