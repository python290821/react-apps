import React, { Component } from "react";
import Car from "./components/Car";
import "./App.css";
import Garage from "./components/Garage";

class App extends Component {
  static my_car_seq = 4
  state = {
    my_cars: [
      { brand: "Honda", model: "civic", color: "blue", year: 2018, id: 1 },
      { brand: "Ferrari", model: "Testa Rossa", color: "red", year: 2020, id: 2 },
      { brand: "Chevrolet", model: "cavalier", color: "green", year: 2022, id: 3 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <Garage cars={this.state.my_cars} />
      </div>
    );
  }
}

export default App;
