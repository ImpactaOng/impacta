import React from 'react'
import fotoHome from "../../assets/fotoHome.png"
import fotoQueimada from "../../assets/fotoQueimada.png"
import fotoUsina from "../../assets/fotoUsina.png"
export default function Home() {
    return (
        <div className="bg-fundoPrincipal h-screen w-full">
            <main className="gap-16 flex flex-col">
                <div className="flex  gap-15 bg-[url('./assets/Back.png')] bg-no-repeat bg-cover  ">
                    <div className="flex flex-col justify-end w-6/12 items-center gap-10  h-96">
                        <div className=" flex flex-col justify-center">
                            <h1 className="font-regular text-corPrincipal text-8xl " >IMPACTA</h1>
                            <p className=" w-96 text-2sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa quibusdam quidem dolores impedit modi consequuntur provident eaque, exercitationem, perferendis rerum cupiditate? Quae facere sit corrupti. Non totam nihil quos?</p>
                        </div>
                        <div className=" bg-corPrincipal w-72 h-10  flex justify-center rounded-[50px] items-center text-xl cursor-pointer"><p className="font-semibold text-white">Trilha da consciência</p></div>
                    </div>
                </div>
                <div className="flex justify-around">
                    <div className="flex gap-10">
                        <img className='h-56' src={fotoQueimada} alt="" />
                        <img className='h-56' src={fotoUsina} alt="" />
                    </div>
                    <div className="flex flex-col gap-10">
                        <p className="w-96 text-2sm text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className=" bg-corPrincipal w-72 h-10  flex justify-center rounded-[50px] items-center text-x cursor-pointer"><p className="font-semibold text-white">Mapeamento local</p></div>
                    </div>
                </div>
            </main>
        </div>
    )
}
