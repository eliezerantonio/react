/* eslint-disable no-unused-vars */
import React from "react";
import ButtonModal from "./ButtonModal";

function App() {
  const [modal, setModal] = React.useState(false);
  return (
    <div>
      <div>{modal ? "Modal Aberto" : "Modal Fechado"}</div>
      <ButtonModal setModal={setModal} />
    </div>
  );
}

export default App;
