import React from "react";
import Quotation from "./pages/Quotation";
import Values from "./pages/Values";
import Footer from "./components/Footer/Index";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Impactos from "./pages/impactos";
import TrilhaAnos from "./pages/TrilhaAnos/index";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
