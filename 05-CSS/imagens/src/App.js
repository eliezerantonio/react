import React from "react";
import foto from "./img/foto.jpg";
import "./App.css";
import DogSvg from "./DogSvg";

const App = () => {
  return (
    <div>
      <p className="fundo"></p>
      <DogSvg />
      <img src={foto} alt="Cachorro" />
    </div>
  );
};
export default App;
