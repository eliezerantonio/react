import React from "react";
import Produto from "./Produto";

const App = () => {
  const [activo, setActivo] = React.useState(false);

  return (
    <div>
      {activo && <Produto />}
      <button onClick={() => setActivo(!activo)}>Ativar</button>
    </div>
  );
};

export default App;
