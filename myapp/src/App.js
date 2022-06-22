import React, { Component } from "react";
import "./App.css";
import Garage from "./components/Garage";
import AddCar from "./components/AddCar";

class App extends Component {
  static my_car_seq = 4
  state = {
    my_cars: [
      { brand: "Honda", model: "civic", color: "blue", year: 2018, id: 1 },
      { brand: "Ferrari", model: "Testa Rossa", color: "red", year: 2020, id: 2 },
      { brand: "Chevrolet", model: "cavalier", color: "green", year: 2022, id: 3 },
    ],
  };

  deleteCar = _id => {
      const new_cars = this.state.my_cars.filter(car => car.id !== _id)
      this.setState({
          my_cars: new_cars
      })
  }
  addCar = _car => {
    this.setState({
        my_cars: [{..._car, id: App.my_car_seq++}, ...this.state.my_cars]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <AddCar add_car={this.addCar} />
        <Garage cars={this.state.my_cars} delete_car = {this.deleteCar} />

        {/*  AddCar add_car = {this.addCar}
            -- form: 
            no bonus: input type text
            brand,model, year (*calendar), color (*drop-down), *electric(check-box)
            submit button --> add_car
            *bonus: clear text-input after submit
     */}
      </div>
    );
  }
}

export default App;
