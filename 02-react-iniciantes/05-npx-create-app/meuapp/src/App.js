/* eslint-disable no-unused-vars */
import React from "react";

const luana = {
  cliente: "Luana2",

  idade: 27,

  compras: [
    { nome: "Notbook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitara", preco: "R$ 3500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",

  idade: 31,

  compras: [
    { nome: "Notbook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitara", preco: "R$ 3500" },
  ],
  ativa: false,
};

const styleBlue = {
  color: "blue",
};

const styleRed = {
  color: "red",
};
const App = () => {
  const dados = mario;
  const total = dados.compras.map((item) => item.preco.replace("R$ ",""));

  console.log(total);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situacao: </p>
    </>
  );
};

export default App;
