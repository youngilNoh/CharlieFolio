import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Intro from "./routes/Intro";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact={true} component={Intro}></Route>
        <Route path="/Home" component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
