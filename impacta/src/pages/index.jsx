import React from "react";

const Quotation = () => {
    return (
        <section className="bg-corPrincipal w-full h-96 flex items-center justify-center">
            <div className="w-full flex flex-col justify-center items-center">
                <p className="text-white w-4/5 text-center italic font-bold">
                    “Juntas, a crescente urbanização e as mudanças climáticas
                    criam riscos complexos, especialmente para aquelas cidades
                    que já enfrentam crescimento urbano mal planejado, altos
                    níveis de pobreza e desemprego e falta de serviços básicos.”
                </p>
                <h3 className="text-white font-bold">
                    Debra C. Roberts, cientista sul-africana
                </h3>
            </div>
        </section>
    );
};

export default Quotation;
