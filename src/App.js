import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import HomePage from "./components/Homepage/HomePage";
import Footer from "./components/Footer/Footer";
import LogIn from "./components/RegistrationAndLogin/LogIn/LogIn";
import Registration from "./components/RegistrationAndLogin/Registration/Registration";

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <Main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profil-poslodavca" component={Registration} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
