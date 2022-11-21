import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import CadastroCall from '../components/CadastroCall';
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (

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
  );
};

export default AppRouter;