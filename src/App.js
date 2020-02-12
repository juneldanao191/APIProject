import React from "react";
import "./App.css";
import NavBar from "./component/navbar/navBar";
import Upload from "./component/Upload/upload";
import HomePage from "./component/Homepage/homepage";
import Footer from './component/Footer/footer';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import uploadReducer from './component/redux/reducers/uploadRecuder';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(uploadReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
    <Router > 
      <NavBar />
      <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/upload" component={Upload}></Route>
      </Switch>
    </Router>
    <Footer />
    </Provider>
    </div>

  );
}

export default App;
