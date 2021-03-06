import React from "react";
import { NavLink, useLocation, useParams, Outlet } from "react-router-dom";

const Produto = () => {
  const params = useParams();

  const location = useLocation();

  const search = new URLSearchParams(location.search);
  console.log(search.get("key"));
  return (
    <div>
      <h1>Produto {params.id}</h1>
      <nav>
        <NavLink to="">Descricao</NavLink>
        <NavLink to="avaliacao">avalaicao</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Produto;
