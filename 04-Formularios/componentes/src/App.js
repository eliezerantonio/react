import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";
const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [produto, setProduto] = React.useState("");
  return (
    <form>
      <Select
        options={["tablet", "watch"]}
        value={produto}
        setValue={setProduto}
      />
      
      <Input label="Nome" id="nome" value={nome} setValue={setNome} />
      <Input
        label="E-mail"
        id="email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
