/* eslint-disable no-unused-vars */
import React from "react";
import Form from "./form/Form";

//inicio props
const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto},{children}
    </h1>
  );
};

const App2 = () => {
  return (
    <>
      <div>
        <Titulo cor="red" texto="Meu Titulo 1" />
        <Titulo cor="blue" texto="Meu Titulo 1" />
      </div>
    </>
  );
};

//fim props
const App = () => {
  return <Form />;
};

export default App;
