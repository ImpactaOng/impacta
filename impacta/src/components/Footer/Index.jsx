import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer
    () {
    return (
        <div>
            <footer className='bg-fundoPrincipal w-full h-56 flex items-center justify-center flex-col gap-8' >
                <h2 className='font-semibold text-5xl text-corPrincipal cursor-pointer'>IMPACTA</h2>
                <ul className='hidden gap-10 text-white text-2xs s780:flex'>
                    <li className='cursor-pointer'>ínicio</li>
                    <li className='cursor-pointer'>Quem Somos</li>
                    <li className='cursor-pointer'>Quiz</li>
                    <li className='cursor-pointer'>Mapeamento</li>
                </ul>
                <div className='flex gap-10'>
                    <div className='border w-12 h-12 rounded-[50%] flex items-center justify-center cursor-pointer'><a href="https://github.com/ImpactaOng" target="_blank" rel="noopener noreferrer"><FaGithub size={30} color='#FF8225' /></a></div>
                    <div className='border w-12 h-12 rounded-[50%] flex items-center justify-center cursor-pointer'><AiFillInstagram size={30} color='#FF8225' /></div>
                    <div className='border w-12 h-12 rounded-[50%] flex items-center justify-center cursor-pointer'><FaLinkedin size={30} color='#FF8225' /> </div>
                </div>
            </footer>
        </div>
    )
}
