import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <div className="box">
          <h1>Color Picker</h1>
          <span>
            <ul>
              <li>
                <label for="H">H</label>
                <input
                  type="range"
                  id="start"
                  name="volume"
                  min="0"
                  max="110"
                />
              </li>
              <li>
                <label for="S">S</label>
                <input
                  type="range"
                  id="cowbell"
                  name="cowbell"
                  min="0"
                  max="100"
                />
              </li>
              <li>
                <label for="L">L</label>
                <input
                  type="range"
                  id="cowbell"
                  name="cowbell"
                  min="0"
                  max="100"
                />
              </li>
            </ul>
            <div className="colorpicker" />
          </span>
        </div>
      </main>
    );
  }
}

export default App;
