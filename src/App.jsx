import { useState } from "react";
import "react-bootstrap";
import "./App.css";

import Login from './pages/Login';
import CadastroCall from './components/CadastroCall';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Suporte from "./Pages/Suporte";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<CadastroCall />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
