import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = "Loja " + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
    console.log(props);
  });
  return (
    <div>
      <h1>Home</h1>
      <p> Essa `e a home</p>
    </div>
  );
};

export default Head;
