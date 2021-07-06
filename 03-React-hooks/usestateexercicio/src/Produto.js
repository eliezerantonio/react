import React from "react";

const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <h1>{dados.preco}</h1>
    </div>
  );
};

export default Produto;
