import React from "react";
import Input from "./Form/Input";
const App = () => {
  const [cep, setCep] = React.useState("");

  function handleBlur({ target }) {
    const regex = /^\d{5}-?\d{3}$/;
    const validacao = regex.test(target.value);

    console.log(validacao);
  }
  return (
    <form>
      <Input
        label="cep"
        id="cep"
        value={cep}
        setValue={setCep}
        type="text"
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {cep}
    </form>
  );
};

export default App;
