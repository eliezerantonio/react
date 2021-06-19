/* eslint-disable no-unused-vars */
import { configure } from "@testing-library/react";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

const App3 = () => {
  const animes = ["One Piece", "Attack Titan", "Jujutsu Kaisen", "Dragon Ball"];

  return (
    <ul>
      {animes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};

const App2 = () => {
  const books = [
    { nome: "One Piece", ano: 1992 },
    { nome: "Attack Titan", ano: 2001 },
    { nome: "Jujutsu Kaisen", ano: 2020 },
  ];

  return (
    <ul>
      {books
        .filter(({ ano }) => ano >= 1998)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
        ))}
    </ul>
  );
};

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const App4 = () => {
  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace("R$ ", "")) > 1500
  );

  return (
    <>
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>{preco}</p>
          <ul>
            {cores.map((cor) => (
              <li style={{ backgroundColor: cor, color: "white" }} key={cor}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

const App5 = () => {
  function heandleScroll(event) {
    console.log(event);
  }
  window.addEventListener("scroll", heandleScroll);

  return (
    <button onClick={(event) => alert(event.target.innerText)}>
      Compre violao
    </button>
  );
};
const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default App;
