import React from 'react'
import impactoUm from "../../assets/impactoUm.png"
import impactoDois from "../../assets/impactoDois.png"
import impactoTres from "../../assets/impactoTres.png"

export default function Impactos() {
  return (
    <div>
      <section className='bg-fundoPrincipal h-screen w-full flex items-center justify-center gap-2 flex-col '>
        <h2 className='text-white w-96 text-4xl text-center bg-red-600flex font-semibold'>Principais <span className='text-corPrincipal'>impactos</span> das mudanças climáticas</h2>
        <div className='flex gap-20 h-full w-3/5 justify-center items-center '>
          <img className='w-2/5 h-[98%]'  src={impactoUm} alt="" />
          <div className='flex flex-col w-[45%] gap-3 justify-between'>
            <img className='w-full' src={impactoDois} alt="" />
            <img className='w-full' src={impactoTres} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
