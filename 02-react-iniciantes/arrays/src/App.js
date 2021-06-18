import React from "react";

const App = () => {
  const animes = ["One Piece", "Attack Titan", "Jujutsu Kaisen", "Dragon Ball"];

  return (
    <ul>
      {animes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};

export default App;
