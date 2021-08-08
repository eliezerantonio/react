import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import Contacto from "./Components/Contacto";
import "./App.css";
import Produto from "./Components/Produto";
const App = ()  => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          {" "}
          <Routes>
            <Route path="/" element={<Produtos></Produtos>}></Route>
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contacto" element={<Contacto></Contacto>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
