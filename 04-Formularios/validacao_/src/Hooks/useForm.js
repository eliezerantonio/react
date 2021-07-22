import React from "react";

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep invalido",
  },
  email: {
    regex: /^\d{5}-?\d{3}$/,
    message: "E-mail invalido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate() {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(!types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
  };
};

export default useForm;
