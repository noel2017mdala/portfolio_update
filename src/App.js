import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Nav from "./Components/Nav";
import Introduction from "./Components/Introduction";
import ContactBody from "./Components/ContactBody";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="h-screen lg:hidden relative" id="Home">
        <Nav />
        <Introduction />
        <About />
        <Portfolio />
        <Skills />
        <ContactBody />
        <div className="rest"></div>
      </div>
    </Router>
  );
}

export default App;
