/* eslint-disable no-unused-vars */
import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

function App() {
  const [modal, setModal] = React.useState(false);
  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
      <ButtonModal setModal={setModal} />
    </div>
  );
}

export default App;
