import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";
const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");

  console.log(cep);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log("enviar");
    } else {
      console.log("Nao enviar");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />{" "}
      <br />
      <Input label="Email" id="email" type="email" {...email} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
