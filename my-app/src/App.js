import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Profil from "./Profil";

import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profil/blomki">Profil de Blomki</Link>
          <Link to="/profil/tifus">Profil de Tifus</Link>
        </ul>
        <ul />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/profil/:username" component={Profil} />
      </div>
    );
  }
}

export default App;
