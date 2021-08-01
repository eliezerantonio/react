import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Pagina Home</p>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
