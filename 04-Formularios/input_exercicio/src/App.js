import React from "react";
const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text,",
  },
  {
    id: "email",
    label: "E-mail",
    type: "email,",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password,",
  },
];
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
    <form>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
    </form>
  );
};

export default App;
