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

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor)=>cor!==target.value));
    }
  }
  return (
    <div>
      <form>
        <label>
          <input
            type="checkbox"
            value="azul"
            // checked={cores}
            onChange={handleChange}
          />
          Azul
        </label>{" "}
        <br></br>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            // checked={cores}
            onChange={handleChange}
          />
          Vermelho
        </label>{" "}
      </form>
    </div>
  );
};

export default App;
