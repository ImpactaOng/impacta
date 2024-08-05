import React from 'react'
import { FaArrowCircleDown } from "react-icons/fa";

export function BotaoTrilha({ dados }) {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-80 h-14 bg-corPrincipal rounded-xl flex items-center justify-center cursor-pointer s580:w-4/5 s1180:w-3/4 s1380:w-4/6 s1580:w-3/5  '>
                <div className='flex w-72 items-center justify-center gap-5 s580:w-full '>
                    <p className='text-white text-base w-60 s580:text-xl s580:w-3/4 s1180:text-2xl  '>{dados.pergunta}</p>
                    <FaArrowCircleDown size={25} color='#fff' />
                </div>
            </div>
        </div >
    )
}
