import React from "react";
import "./App.css";
import NavBar from "./component/navbar/navBar";
import Upload from "./component/Upload/upload";
import HomePage from "./component/Homepage/homepage";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router > 
      <NavBar />
      <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/upload" component={Upload}></Route>
      </Switch>
    </Router>
    </div>

  );
}

export default App;
