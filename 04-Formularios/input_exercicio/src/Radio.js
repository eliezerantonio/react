import React from "react";

const Radio = () => {
  const [produto, setProduto] = React.useState("");

  function handleChange({ target }) {
    setProduto(target.value);
  }
  return (
    <div>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="tablet"
        >
          Tablet
        </input>
      </label>

      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="notebook"
        >
          Notebook
        </input>
      </label>

      <p>{produto}</p>
    </div>
  );
};

export default Radio;
