import React from "react";
import "./App.css";
import NavBar from "./component/navbar/navBar";
import Users from "./component/Users/users";
import HomePage from "./component/Homepage/homepage";
import Footer from './component/Footer/footer';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userReducer from './component/redux/reducer/userReducer';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(userReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
    <Router > 
      <NavBar />
      <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/user" component={Users}></Route>
      </Switch>
    </Router>
    <Footer />
    </Provider>
    </div>

  );
}

export default App;
