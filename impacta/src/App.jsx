import React from "react";
import Quotation from "./pages/Quotation";
import Values from "./pages/Values";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Impactos from "./pages/impactos";

const App = () => {
    return (
        <div>
            <Navbar />
            <Quotation />
            <Impactos />
            <Values />
        </div>
    );
};

export default App;
