import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";
const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("enviar");
    } else {
      console.log("Nao enviar");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" {...nome} /> <br />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />{" "}
      <br />
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
