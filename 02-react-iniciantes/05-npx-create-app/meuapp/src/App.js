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

const App = () => {
  const dados = mario;
  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Total: {total} </p>
      <p>
        Situacao:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "activa" : "Inativa"}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p> Voce esta gastando muito</p>}
    </>
  );
};

export default App;
