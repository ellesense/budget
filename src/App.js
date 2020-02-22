import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Visual from "./components/Visual";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={Main} />
        {/* <Route path="/visual" exact component={Visual} /> */}
        <Route path="/about" exact component={About} />
      </BrowserRouter>
    </div>
  );
};

export default App;
