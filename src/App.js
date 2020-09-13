import React from 'react';
import Chooser from "./components/Chooser";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello there</h1>
      <h2>This app allows you to simulate various physical throws using chart.js.</h2>
      <h2>Choose your options below, click the button and let the magic happen.</h2>
      <Chooser/>
    </div>
  );
}

export default App;
