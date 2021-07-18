import React from "react";
import Input from "./Form/Form";
const App = () => {
  const [bi, setBi] = React.useState("");

  function handleBlur({ target }) {
    console.log(target.value);
  }
  return (
    <form>
      <Input
        label="BI"
        id="bi"
        value={bi}
        setValue={setBi}
        type="text"
        onBlur={handleBlur}
        placeholder="0048-5808-2HA0-41"
      />
    </form>
  );
};

export default App;
