import React, { Component } from "react";
import "../style/app.scss";
import manga from "../../static/assets/images/the thing.jpg";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Eidan page</h1>
        <img src={manga} />
      </div>
    );
  }
}
