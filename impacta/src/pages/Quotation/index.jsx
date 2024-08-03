import React from "react";
import quotationTp from "./assets/aspas-tp.png";
import quotationBt from "./assets/aspas-bt.png";

const Quotation = () => {
    return (
        <section className="bg-corPrincipal w-full h-96 flex items-center justify-center relative overflow-hidden">
            <img
                className="absolute -top-0 left-0 s880:w-1/6 s880:-top-10"
                src={quotationTp}
                alt=""
            />

            <div className="w-full flex flex-col justify-center items-center">
                <p className="text-white w-4/5 text-center italic font-bold mb-5 s680:text-xl s880:w-5/12 s1080:w-2/4 s1380:w-4/12">
                    “Juntas, a crescente urbanização e as mudanças climáticas
                    criam riscos complexos, especialmente para aquelas cidades
                    que já enfrentam crescimento urbano mal planejado, altos
                    níveis de pobreza e desemprego e falta de serviços básicos.”
                </p>
                <h3 className="text-white font-semibold s680:text-lg">
                    Debra C. Roberts, cientista sul-africana
                </h3>
            </div>

            <img
                className="absolute -bottom-0 right-0 s880:w-2/12 s880:-bottom-4 s880:-right-4"
                src={quotationBt}
                alt=""
            />
        </section>
    );
};

export default Quotation;
