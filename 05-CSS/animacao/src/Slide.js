import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  const [activo, setActivo] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(activo * width));
  }, [activo]);

  function slideNext() {
    if (activo < slides.length) setActivo(activo + 1);
  }

  function slidePrev() {
    if (activo > 0) setActivo(activo - 1);
  }
  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {" "}
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Proximo</button>
      </nav>
    </section>
  );
};

export default Slide;
