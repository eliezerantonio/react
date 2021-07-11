import React from "react";

import { GlobalContext } from "./GlobalContext";

const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return (
    <div>
      <button onClick={limparDados}>Limpar</button>
    </div>
  );
};

export default Limpar;
