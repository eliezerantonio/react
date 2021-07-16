import React from "react";
import Input from "./Form/Input";
const App = () => {
  return (
    <form>
      <Input label="Nome" id="nome" />
      <Input label="E-mail" id="email" />
    </form>
  );
};

export default App;
