import React from "react";
import styles from "./Contacto.module.css";

import foto from "../img/contato.jpg";
import Head from "./Head";
const Contacto = () => {
  return (
    <section className={`${styles.contacto} animeLeft`}>
      <Head title="Ranek | Contacto" description="Entre em contacto" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contacto</h1>
        <ul className={styles.dados}>
          <li>eliezer@origamid.com </li>
          <li>924033375 </li>
          <li>Bairro Cdt Cow-Boy </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacto;
