import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact={true} component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
