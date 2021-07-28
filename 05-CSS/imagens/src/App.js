import React from "react";
// import foto from "./img/foto.jpg";
import "./App.css";
import DogSvg from "./DogSvg";

const App = () => {
  const [olho, setOlho] = React.useState(0);

  function aument() {
    setOlho(olho + 1);
  }

  return (
    <div>
      <p onClick={aument} className="fundo"></p>
      <DogSvg color="#84e" olho={olho} />
      {/* <img src={foto} alt="Cachorro" /> */}
    </div>
  );
};
export default App;
