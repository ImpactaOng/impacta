import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Mapeamento from "./pages/Mapeamento";
import PerguntasQuiz from "./pages/perguntasQuiz";
import Trilhas from "./pages/Trilhas";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mapeamento" element={<Mapeamento />} />
                <Route path="/trilhas" element={<Trilhas />} />
                <Route path="/quiz" element={<PerguntasQuiz />} />
            </Routes>
        </Router>
    );
};

export default App;
