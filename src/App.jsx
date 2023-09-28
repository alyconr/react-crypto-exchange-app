import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/phoneTransfer" component={HomePage} />
        <Route exact path="/services" component={HomePage} />
        <Route exact path="/products" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
