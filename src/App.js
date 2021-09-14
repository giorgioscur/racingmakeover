import React from "react";
import { Team, Contact, Store, History, Home } from "./pages";
import { NavBar, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
