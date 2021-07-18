import React from "react";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";
const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [produto, setProduto] = React.useState("");

  const [cor, setCor] = React.useState("");
  const [frutas, setFrutas] = React.useState("");
  return (
    <form>
      <h2> Cores </h2>
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
      <Select
        options={["tablet", "watch"]}
        value={produto}
        setValue={setProduto}
      />
      <h2>Frutas</h2>
      <Radio
        options={["Limao", "Laranja", "Uva"]}
        value={frutas}
        setValue={setFrutas}
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
