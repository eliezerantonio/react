import React from "react";

const App = () => {
  const [form, setForm] = React.useState({ nome: "", email: "" });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;

    console.log(id, value);

    setForm({ ...form, [id]: value });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      {form.nome} <br />
      <label>E-mail</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {form.email}
      <button>Enviar</button>
    </form>
  );
};

export default App;
