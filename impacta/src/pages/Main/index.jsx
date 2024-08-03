import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TrilhaAnos from "../TrilhaAnos";
import Quotation from "../Quotation";
import Impactos from "../impactos";
import Values from "../Values";
import Footer from "../../components/Footer/Index";

const Main = () => {
    return (
        <>
            <Navbar />
            <TrilhaAnos />
            <Quotation />
            <Impactos />
            <Values />
            <Footer />
        </>
    );
};

export default Main;
