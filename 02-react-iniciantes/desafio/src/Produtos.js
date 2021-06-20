import React from "react";
import Produto from "./Produto";
import Titulo from "./Titulo";

function Produtos() {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },

    { nome: "Smartphone", propriedades: ["2gb ram", "128Gb"] },
  ];
  return (
    <div>
      <section>
        <Titulo texto="Produtos" />

        {produtos.map((produto) => (
          <Produto key={produto.nome} {...produto} />
        ))}
      </section>
    </div>
  );
}

export default Produtos;
