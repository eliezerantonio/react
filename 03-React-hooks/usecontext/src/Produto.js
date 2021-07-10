import React from "react";

import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.adicionarDois();
  }

  return (
    <div>
      Produto: {global.contar} <button onClick={handleClick}>Contar</button>
    </div>
  );
};

export default Produto;
