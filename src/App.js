import React, { Component } from "react";
import "./App.css";

//import Quote from "./Quote";
import Quotes from "./Quotes";

class App extends Component {
  

  render() {
    return (
      <div className="A6pp">
        <header className="App-header">
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Quotes/>
      </div>
    );
  }
}

export default App;
