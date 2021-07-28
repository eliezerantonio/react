import React from "react";
import Produto from "./Produto";
const App = () => {
  const [ativar, setActivar] = React.useState(false);
  return (
    <div>
      <button onClick={() => setActivar(!ativar)}>ativar</button>
      {ativar && <Produto />}
    </div>
  );
};

export default App;
