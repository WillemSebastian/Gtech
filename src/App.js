import React from 'react';
import Home from './app/containers/home'
import './App.css';
import AppContext from "./AppContext";

function App() {
  return (
    <AppContext.Provider
      
    >
      <div className="App">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
