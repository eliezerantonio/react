import React from "react";

const random = Math.random();
const activo = true;

const estiloP = {
  color: "blue",
};

function mostrarNome(sobrenome) {
  return "Eliezer " + sobrenome;
}

const App = () => {
  return (
    <>
      {mostrarNome("Antonio")}
      <p style={estiloP} className={activo ? "activo" : "Inativi"}>
        {random * 100}
      </p>
    </>
  );
};

export default App;
