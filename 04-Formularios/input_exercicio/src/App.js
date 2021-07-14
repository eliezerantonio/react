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
    id: "numero",
    label: "Numero",
    type: "number,",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password,",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text,",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text,",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text,",
  },
];

const App = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    })
  );

  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const result = await fetch(
      "https://ranekapi.origamid.dev/json/api/usuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );
    setResponse(result);
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      {response && response.ok && <p>Fomulario enviado</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
