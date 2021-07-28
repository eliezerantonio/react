import React from "react";
import Card from "react-bootstrap/Card";
const App = () => {
  return (
    <Card bg="dark" text="white" className="m-5" style={{ maxWith: "18rem" }}>
      <Card.Header> Notebook </Card.Header>
      <Card.Body>
        <Card.Title> r$ 2500</Card.Title>
        <Card.Text> Granda macbook dos grandes mano muito massa</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
