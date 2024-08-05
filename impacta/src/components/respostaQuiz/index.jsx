import React from 'react'

export default function Respostas({dados}) {
    console.log(dados)
    return (
        <div className='flex flex-col gap-3 justify-center items-center w-full'>
            <h2 className='font-semibold w-80 text-xl s580:text-2xl s580:w-11/12 s980:items-center s980:justify-center s980:flex '>{dados.pergunta}</h2>
            {
                dados.alternativas.map(alternativa => (<div className='w-full bg-white h-14 flex items-center justify-center cursor-pointer rounded-xl s980:w-10/12'><p className='text-lg text-black font-semibold w-64 s580:text-xl s580:w-10/12 s980:text-2xl s980:w-11/12'>{alternativa.pergunta}</p></div>)) 
            }
        </div>
    )
}
