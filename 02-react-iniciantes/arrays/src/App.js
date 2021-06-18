// import React from "react";

// const App = () => {
//   const animes = ["One Piece", "Attack Titan", "Jujutsu Kaisen", "Dragon Ball"];

//   return (
//     <ul>
//       {animes.map((filme) => (
//         <li key={filme}>{filme}</li>
//       ))}
//     </ul>
//   );
// };

// export default App;

import React from "react";

const App = () => {
  const books = [
    { nome: "One Piece", ano: 1992 },
    { nome: "Attack Titan", ano: 2001 },
    { nome: "Jujutsu Kaisen", ano: 2020 },
  ];

  return (
    <ul>
      {books
        .filter(({ ano }) => ano >= 1998)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
        ))}
    </ul>
  );
};

export default App;
