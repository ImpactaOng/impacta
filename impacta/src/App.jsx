import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Mapeamento from "./pages/Mapeamento";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mapeamento" element={<Mapeamento />} />
            </Routes>
        </Router>
    );
};

export default App;
