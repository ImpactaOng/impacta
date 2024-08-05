import React, { useState } from "react";
import logo from "./assets/logoQuiz.png";
import { Link } from "react-router-dom";

function PerguntasQuiz() {
    const [indicePergunta, setIndicePergunta] = useState(0);

    const [respostas, setRespostas] = useState([]);

    const [resultado, setResultado] = useState(null);

    const perguntas = [
        {
            pergunta:
                "1. Como as ondas de calor afetam nossa saúde e bem-estar?",

            opcoes: [
                "A. Reduzem os níveis de poluição do ar.",
                "B. Aumentam a ocorrência de doenças relacionadas ao calor.",
                "C. Melhoram a produtividade no trabalho.",
                "D. Reduzem o uso de ar-condicionado.",
                "E. Fortalecem os ecossistemas naturais.",
            ],

            resposta:
                "B. Aumentam a ocorrência de doenças relacionadas ao calor.",
        },

        {
            pergunta:
                "2. Por que as ondas de calor estão se tornando mais comuns?",

            opcoes: [
                "A. Devido à diminuição das emissões de gases de efeito estufa.",
                "B. Por causa do aumento das áreas verdes urbanas.",
                "C. Devido à redução da urbanização.",
                "D. Por causa do aumento das emissões de gases de efeito estufa.",
                "E. Devido à melhoria das práticas agrícolas.",
            ],

            resposta:
                "D. Por causa do aumento das emissões de gases de efeito estufa.",
        },

        {
            pergunta:
                "3. Quais são alguns dos impactos devastadores das ondas de calor?",

            opcoes: [
                "A. Aumento da biodiversidade.",
                "B. Diminuição do consumo de energia.",
                "C. Causam desidratação e insolação.",
                "D. Melhoram a qualidade do ar.",
                "E. Fortalecem a economia local.",
            ],

            resposta: "C. Causam desidratação e insolação.",
        },

        {
            pergunta:
                "4. Como podemos prevenir e mitigar os efeitos das ondas de calor?",

            opcoes: [
                "A. Aumentando o uso de combustíveis fósseis.",
                "B. Adotando soluções de infraestrutura verde.",
                "C. Reduzindo o número de áreas verdes nas cidades.",
                "D. Promovendo o desmatamento.",
                "E. Reduzindo a eficiência energética.",
            ],

            resposta: "B. Adotando soluções de infraestrutura verde.",
        },

        {
            pergunta:
                "5. Quais exemplos de sucesso foram mencionados na luta contra as ondas de calor?",

            opcoes: [
                "A. Aumentando o uso de combustíveis fósseis.",
                "B. Adotando soluções de infraestrutura verde.",
                "C. Reduzindo o número de áreas verdes nas cidades.",
                "D. Promovendo o desmatamento.",
                "E. Reduzindo a eficiência energética.",
            ],

            resposta: "B. Adotando soluções de infraestrutura verde.",
        },
    ];

    const responder = (respostaSelecionada) => {
        setRespostas([...respostas, respostaSelecionada]);

        if (indicePergunta + 1 < perguntas.length) {
            setIndicePergunta(indicePergunta + 1);
        } else {
            calcularResultado();
        }
    };

    const calcularResultado = () => {
        let pontuacao = 0;

        for (let i = 0; i < perguntas.length; i++) {
            if (respostas[i] === perguntas[i].resposta) {
                pontuacao++;
            }
        }

        setResultado(pontuacao);
    };

    const reiniciarQuiz = () => {
        setIndicePergunta(0);

        setRespostas([]);

        setResultado(null);
    };

    return (
        <section className="w-full h-screen flex justify-center relative bg-fundoQuiz">
            <Link to={"/"}>
                <img
                    className="w-2/12 absolute left-2 top-2 s480:w-16 s780:w-20"
                    src={logo}
                    alt=""
                />
            </Link>
            {resultado !== null ? (
                <div className="w-full gap-4 flex flex-col justify-center items-center font-bold">
                    <img className="w-3/12  left-2 top-2 " src={logo} alt="" />

                    <p>
                        Você acertou {resultado} de {perguntas.length}{" "}
                        perguntas!
                    </p>

                    <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
                </div>
            ) : (
                <div className="w-full h-3/5 flex flex-col justify-around items-center mt-16 font-bold">
                    <p className="w-4/5 text-center">
                        {perguntas[indicePergunta].pergunta}
                    </p>

                    <ul className="w-full flex flex-col justify-center items-center gap-4">
                        {perguntas[indicePergunta].opcoes.map(
                            (opcao, index) => (
                                <li
                                    className="bg-white w-11/12 h-10 flex items-center justify-center text-sm rounded-lg s780:w-4/5 s1180:w-2/3"
                                    key={index}
                                    onClick={() => responder(opcao)}
                                >
                                    {opcao}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default PerguntasQuiz;
