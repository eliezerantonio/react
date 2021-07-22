import React from "react";

const Radio = ({ pergunta, options, id }) => {
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBotton: "1rem",
        border: "2px solid #eee",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBotton: "1rem", fontFamily: "monospace" }}
        >
          <input type="radio" value={option} />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
