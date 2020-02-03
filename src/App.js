import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import NavBar from './component/navbar/navBar';
import HomePage from './component/homepage/homePage';
import Create from './component/create/form';

function App() {
  return (

    
    <div className="App">
     <NavBar />
     <HomePage />
     <Create />
    </div>
  );
}

export default App;
