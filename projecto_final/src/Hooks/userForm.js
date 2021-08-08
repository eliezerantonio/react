import React from "react";

const userForm = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = React.useState("");
  function onChange({ target }) {
    setValue(target.value);
  }
  return { value, setValue };
};

export default userForm;
