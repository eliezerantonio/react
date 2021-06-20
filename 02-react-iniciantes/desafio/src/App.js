/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

function App() {
  let Pagina ;

  const { pathname } = window.location;

  if (pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <div>
      <Header />
      <Pagina />
    </div>
  );
}

export default App;
