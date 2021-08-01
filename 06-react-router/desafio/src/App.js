import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import Contato from "./Components/Contato";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          {" "}
          <Routes>
            <Route path="/" element={<Produtos></Produtos>}></Route>
            <Route path="contato" element={<Contato></Contato>}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
