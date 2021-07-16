import React from "react";

const Select = () => {
  const [select, setSelect] = React.useState("'");
  return (
    <form>
      <select
        id="produto"
        value={select}
        onChange={({ target }) => setSelect(target)}
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>

      <p>{select}</p>
    </form>
  );
};

export default Select;
