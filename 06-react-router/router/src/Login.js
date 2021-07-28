import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
