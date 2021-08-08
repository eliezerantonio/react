import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={<LoginForm />} />
        <Route path="criar" component={<LoginCreate />} />
        <Route path="perdeu" component={<LoginPasswordLost />} />
        <Route path="resetar" component={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
