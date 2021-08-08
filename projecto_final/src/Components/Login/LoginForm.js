import React from "react";
import { Link } from "react-router-dom";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import useForm from "../../Hooks/userForm";
const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    fetch("http");
  }
  return (
    <section>
      Login form
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastros</Link>
    </section>
  );
};

export default LoginForm;
