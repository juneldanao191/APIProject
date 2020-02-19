import React from "react";
import "./App.css";
import Users from "./component/Users/users";
import HomePage from "./component/Homepage/homepage";
import NavBar from "./component/Navbar/navBar";
import Footer from "./component/Footer/footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import userReducer from "./component/redux/reducer/userReducer";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(userReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/users" component={Users}></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
