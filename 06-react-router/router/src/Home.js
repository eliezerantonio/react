import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
// import Head from "./Head";

const Home = () => {
  return (
    <div>
      {/* <Head title="Home" description="essa e a descricao da home" /> */}

      <Helmet>
        <title>Dogs | Home</title>
        <meta name="description" content=" Essa e a pagina Home" />
      </Helmet>
      <p>Pagina Home</p>
      <Link to="produto/notebook">Notebook</Link>
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  );
};

export default Home;
