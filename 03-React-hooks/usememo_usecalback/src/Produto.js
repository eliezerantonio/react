import React from "react";

export const Produto = () => {
  const func1 = () => {
    console.log("Teste");
  };

  const func2 = React.useCallback(() => {
    console.log("Teste");
  }, []);

  return (
    <div>
      <p onClick={func1}> Produto 1</p>
      <p onClick={func2}> Produto 2</p>
    </div>
  );
};
