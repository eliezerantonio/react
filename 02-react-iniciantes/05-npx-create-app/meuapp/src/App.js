import React from "react";

const random = Math.random();
const activo = true;

function mostrarNome(sobrenome) {
  return "Eliezer " + sobrenome;
}

const App = () => {
  return (
    <>
      {mostrarNome("Antonio")}
      <p className={activo ? "activo" : "Inativi"}>{random * 100}</p>
    </>
  );
};

export default App;
