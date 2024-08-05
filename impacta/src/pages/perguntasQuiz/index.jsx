import React from 'react'
import logoQuiz from "./assets/logoQuiz.png"
import Respostas from '../../components/respostaQuiz'

export default function PerguntasQuiz() {
    const dataRespostasQuiz = [
        {
            pergunta: "1. Como as ondas de calor afetam nossa saúde e bem-estar?",
            alternativas: [
                {
                    pergunta: "A. Reduzem os níveis de poluição do ar.",
                    correta: true
                },
                {
                    pergunta: "B. Aumentam a ocorrência de doenças relacionadas ao calor.",
                    correta: true
                },
                {
                    pergunta: "C. Melhoram a produtividade no trabalho.",
                    correta: true
                },
                {
                    pergunta: "D. Reduzem o uso de ar-condicionado.",
                    correta: true
                },
                {
                    pergunta: "E. Fortalecem os ecossistemas naturais.",
                    correta: true
                },
            ]
        }
    ]
    return (
        <section className='bg-fundoQuiz h-screen w-full flex gap-8 flex-col items-center'>
            <img className='flex w-36' src={logoQuiz} alt="" />
            <div className='flex flex-col items-center justify-center gap-10 w-4/5 s980:w-8/12'>
                {dataRespostasQuiz.map((respostaQuiz, index) => (
                    <Respostas key={index} dados={respostaQuiz} />
                ))}
            </div>
        </section>
    )
}
