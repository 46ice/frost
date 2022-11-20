import { useState } from "react";
import "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Suporte from "./Pages/Suporte";
function App() {
  return (
    <div className="App">
      <Header/>
      <Suporte/>
      <Footer/>
    </div>
  );
}

export default App;
