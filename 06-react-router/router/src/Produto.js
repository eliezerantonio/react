import React from "react";
import { useParams } from "react-router-dom";
const Produto = () => {
  const params = useParams();
  
  return (
    <div>
      <h1>Produto {params.id}</h1>
    </div>
  );
};

export default Produto;
