import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" component={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default Login;
