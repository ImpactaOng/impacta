import React from 'react'
import logoQuiz from "./assets/logoQuiz.png"

export default function Quiz() {
    return (
            <section className='h-screen w-full bg-fundoQuiz flex flex-col justify-around items-center'>
                <img className='w-64' src={logoQuiz} alt="" />
                <h3 className='font-semibold text-4xl text-center w-2/5 s380:w-96 s380:text-2xl s780:text-3xl s780:w-7/12 s880:w-6/12 s980:w-5/12 s1180:text-4xl s1180:w-2/5 s1280:w-5/12 s1580:w-4/12 s1880:w-5/12 s1880:text-5xl s1920:w-5/12'>Mostre que você é fera e tente acertar as perguntas desse quiz!</h3>
                <div className='w-5/12 bg-white h-16 rounded-xl flex items-center justify-center border-2 cursor-pointer border-black'><p className='text-3xl font-semibold'>COMEÇAR</p></div>
            </section>
    )
}
