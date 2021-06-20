import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  return (
    <div>
      <Input id="email" label="Email" required />
      <Input id="password" label="Password" />
      <Button />
    </div>
  );
};

export default Form;
