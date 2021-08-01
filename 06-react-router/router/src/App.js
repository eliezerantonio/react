import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import NaoEncontrada from "./NaoEncontrada";
import Produto from "./Produto";
import Sobre from "./Sobre";
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizado from "./ProdutoCustomizado";
import ProdutoDescricao from "./ProdutoDescricao";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrada />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
