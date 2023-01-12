import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "semantic-ui-react";
import Header from "./shared/Header";
import Menus from "./containers/Menus";
import Steppers from "./shared/Steppers";

function App() {
  return (
    <div className="App">
      <header className="App-header p-4">
        <Header>
          <Steppers />
        </Header>
        <Menus />
      </header>
    </div>
  );
}

export default App;
