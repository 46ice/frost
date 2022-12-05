import React, { useState } from "react";
import "react-bootstrap";
import "./assets/App.css";

import Login from './pages/index/Login';
import Logout from './pages/index/Logout';
import CadastroCall from './components/CadastroCall';

import Footer from "./components/Footer";

import Home from "./pages/index/Home";
import Produtos from "./pages/index/Produtos";
import DetalhesPerfil from './pages/user/DetalhesPerfil';
import Chest from './pages/chest/Chest';

import useToken from './components/useToken';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderOption from "./components/HeaderOption";

function App() {

  const { token, setToken } = useToken();
  
  // if(!token) {
  //   return (
  //     <div className="App">
  //       <Header/>
  //       <Login setToken={setToken} />
  //       <Footer/>
  //     </div>
  //   )
  // }

  return (
    <div className="App">
      <BrowserRouter>
                <HeaderOption />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<Login setToken={setToken}/>}></Route>
                        <Route path="/logout" element={<Logout />}></Route>
                        <Route path="/register" element={<CadastroCall />}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/profile" element={<DetalhesPerfil />}></Route>
                        <Route path="/suporte" element={<Produtos />}></Route>
                        <Route path="/chest" element={<Chest />}></Route>
                    </Routes>
                </div>
                <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
