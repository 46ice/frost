import React, { useState } from "react";
import "react-bootstrap";
import "./assets/App.css";

import Login from './pages/Login';
import CadastroCall from './components/CadastroCall';

import Header from "./components/Header";
import HeaderLogged from "./components/HeaderLogged";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Suporte from "./Pages/Suporte";
import DetalhesPerfil from './pages/DetalhesPerfil';
import useToken from './components/useToken';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const { token, setToken } = useToken();


  if(!token) {
    
    return (
      <div className="App">
        <Header/>
        <Login setToken={setToken} />
        <Footer/>
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
            <div>
                <HeaderLogged />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<CadastroCall />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/profile" element={<DetalhesPerfil />}></Route>
                        <Route path="/suporte" element={<Suporte />}></Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
