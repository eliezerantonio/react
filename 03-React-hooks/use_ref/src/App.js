import React from "react";

const App = () => {
  const video = React.useRef();

  React.useEffect(() => {
    console.log(video.current.currentTime);
  });
  React.useEffect(() => {});
  return <div ref={video}>Teste</div>;
};

export default App;
