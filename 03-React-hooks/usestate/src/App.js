/* eslint-disable no-unused-vars */
import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

function App() {
  const [modal, setModal] = React.useState(false);
  //let [items, setItems] = React.useState("teste");

  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick() {
    setContar(contar + 1);

    setItems([...items, "Items " + (contar + 1)]);
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}

      <button onClick={handleClick}>{contar}</button>
    </div>
  );
  // function handleClick() {
  //   setItems("Outro");
  // }

  // return (
  //   <div>
  //     <p>{items}</p>
  //     <button onClick={handleClick}> Mudar </button>
  //     <Modal modal={modal} setModal={setModal} />
  //     <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
  //     <ButtonModal setModal={setModal} />
  //   </div>
  // );
}

export default App;
