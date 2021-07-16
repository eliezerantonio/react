import React from "react";

// const App = () => {
//   const [termos, setTermos] = React.useState(false);
//   return (
//     <div>
//       <form>
//         {termos && <p>Aceitou os termos</p>}
//         <label>
//           <input
//             type="checkbox"
//             value="Termos"
//             checked={termos}
//             onChange={({ target }) => setTermos(target.checked)}
//           />
//           Aceito os termos
//         </label>
//       </form>
//     </div>
//   );
// };

// export default App;
const coresArray = ["azul", "laranja", "vermelho", "castanho", "roxo"];
const App = () => {
  const [cores, setCores] = React.useState(["vermelho", "azul"]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }
  return (
    <div>
      <form>
        {coresArray.map((cor) => (
          <label key={cor} style={{ textTransform: "capitalize" }}>
            {" "}
            <input
              type="checkbox"
              value={cor}
              checked={cores.includes(cor)}
              onChange={handleChange}
            />
            {cor}
            <br></br>
          </label>
        ))}
      </form>
    </div>
  );
};

export default App;
