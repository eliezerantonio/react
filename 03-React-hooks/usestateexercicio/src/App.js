/* eslint-disable no-unused-vars */
import React from "react";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = React.useState(null);

  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    //https://ranekapi.origamid.dev/json/api/produto/\

    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button style={{ margin: ".5em" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: ".5em" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: ".5em" }} onClick={handleClick}>
        tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
