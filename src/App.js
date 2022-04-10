import React, { useState, useEffect } from "react";
import ReactGa from "react-ga";
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

  useEffect(() => {
    ReactGa.initialize("G-9M1ZT05T0P");
    ReactGa.pageview("/");
  }, []);
  return (
    <div className="h-screen lg:hidden relative" id="Home">
      <Nav navState={{ tabState, setTabState }} />

      <Introduction navState={{ tabState, setTabState }} />
      <About navState={{ tabState, setTabState }} />
      <Portfolio navState={{ tabState, setTabState }} />
      <Skills navState={{ tabState, setTabState }} />
      <ContactBody navState={{ tabState, setTabState }} />

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
