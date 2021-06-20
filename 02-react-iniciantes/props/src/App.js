import React from "react";

const Titulo = ({cor, texto}) => {
  return <h1 style={{ color: cor }}>{texto}</h1>;
};

const App = () => {
  return (
    <>
      <div>
        <Titulo cor="red" texto="Meu Titulo 1" />
        <Titulo cor="blue" texto="Meu Titulo 1" />
      </div>
    </>
  );
};

export default App;
