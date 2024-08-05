import React from "react";
import fotoHome from "../../assets/fotoHome.png";
import fotoQueimada from "../../assets/fotoQueimada.png";
import fotoUsina from "../../assets/fotoUsina.png";

export default function Home() {
    return (
        <div className="bg-fundoPrincipal h-screen w-full">
            <main className="gap-16 flex flex-col">
                <div className="flex gap-15 s980:bg-[url('./assets/Back.png')] s380:bg-[url('./assets/backCel.png')] s480:items-center  s380:bg-cover s380:bg-no-repeat bg-right s980:bg-no-repeat  s380:justify-center s980:justify-start s980:bg-bgImage980 s1080:bg-bgImage1080  s1180:bg-bgImage1180 s1280:bg-bgImage1280 s1380:bg-bgImage1380 s1480:bg-bgImage1480 s1580:bg-bgImage1580 s1680:bg-bgImage1680 s1780:bg-bgImage1780 s1880:bg-bgImage1880" >
                    <div className="flex flex-col s380:flex s380:mt-24 s980:mt-0 s380:justify-center s380:items-center s980:justify-end w-6/12 items-center gap-10  s980:h-96">
                        <div className=" flex flex-col justify-center items-center s380:gap-10">
                            <h1 className="font-regular text-corPrincipal s380:text-5xl bg980:text-8xl " >IMPACTA</h1>
                            <p className=" s380:w-72 s980:w-96 text-2sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa quibusdam quidem dolores impedit modi consequuntur provident eaque, exercitationem, perferendis rerum cupiditate? Quae facere sit corrupti. Non totam nihil quos?</p>
                        </div>
                        <div className=" bg-corPrincipal w-72 h-10  flex justify-center rounded-[50px] items-center text-xl cursor-pointer"><p className="font-semibold text-white">Trilha da consciência</p></div>
                    </div>
                </div>
                <div className="flex justify-around">
                    <div className="hidden gap-10 s980:flex ">
                        <img className='h-56' src={fotoQueimada} alt="" />
                        <img className='h-56' src={fotoUsina} alt="" />
                    </div>
                    <div className="flex flex-col gap-10">
                        <p className=" hidden w-96 text-2sm text-white s980:flex">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className=" bg-corPrincipal w-72 h-10  flex justify-center rounded-[50px] items-center text-x cursor-pointer"><p className="font-semibold text-white">Mapeamento local</p></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
