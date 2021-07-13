import React from "react";

const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }
  return (
    <div>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
    </div>
  );
};

export default App;
