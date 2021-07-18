import React from "react";
import Input from "./Form/Input";
const App = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um valor valido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    const validacao = validateCep(target.value);

    console.log(validacao);
  }
  function handleChange({ target }) {
    setCep(target.value);
  }
  return (
    <form>
      <Input
        label="cep"
        id="cep"
        value={cep}
        setValue={setCep}
        onChange={handleChange}
        type="text"
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>error</p>}
    </form>
  );
};

export default App;
