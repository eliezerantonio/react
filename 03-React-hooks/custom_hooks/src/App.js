import React from "react";
import useLocalStorage from "./useLocalStorage";
const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <div>
      <p>Produto preferdo: {produto}</p>
      <button onClick={handleClick}>notebook</button> <br />
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

export default App;
