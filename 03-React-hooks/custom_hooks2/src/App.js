import React from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data } = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    request("https://ranekapi.origamid.dev./json/api/produto/");
  }, []);
  return (
    <div>
      <p>Produto preferdo: {produto}</p>
      <button onClick={handleClick}>notebook</button> <br />
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

export default App;
