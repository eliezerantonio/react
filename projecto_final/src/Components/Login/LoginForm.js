import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      Login form
      <Link to="/login/criar">Cadastros</Link>
    </div>
  );
};

export default LoginForm;
