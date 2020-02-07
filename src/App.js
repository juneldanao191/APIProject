import React from "react";
import "./App.css";
import NavBar from "./component/navbar/navBar";
import Upload from "./component/Upload/upload";
import HomePage from "./component/Homepage/homepage";
import Footer from './component/Footer/footer';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

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
    <Footer />
    </div>

  );
}

export default App;
