import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <Main>
        <BackgroundImage />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
