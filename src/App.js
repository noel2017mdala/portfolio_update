import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Nav from "./Components/Nav";
import Introduction from "./Components/Introduction";
import ContactBody from "./Components/ContactBody";
import Projects from "./Components/Projects";

import "./App.css";

const Container = () => {
  const [tabState, setTabState] = useState({
    about: false,
    portfolio: false,
    skills: false,
    contact: false,
  });
  return (
    <div className="h-screen lg:hidden relative" id="Home">
      <Nav />

      <Introduction />
      <About navState={{ tabState, setTabState }} />
      <Portfolio />
      <Skills />
      <ContactBody />

      <div className="rest"></div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Route>
        <Switch>
          <Route path="/" exact component={Container} />
          <Route path="/Portfolio" exact component={Projects} />
        </Switch>
      </Route>
    </Router>
  );
}

export default App;
