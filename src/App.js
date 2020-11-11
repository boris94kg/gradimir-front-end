import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";

function App() {
  return (
    <Container maxWidth disableGutters>
      <Header />
    </Container>
  );
}

export default App;
