import React from "react";

const Input = ({ label , id }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" />
    </div>
  );
};

export default Input;
