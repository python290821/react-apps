import React, { Component } from "react";
import Car from "./Car";

class Garage extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        {
            // ex-1: this 2020 will come from a text-box input

          this.props.cars.filter(_car => _car.year > 2020).
              map(_car => <Car car={_car} key={_car.id} delete_car = {this.props.delete_car} />)
          //this.props.cars.map((_car) => {
          //if (_car.year > 2020)
            //return (
            // <Car car={_car} key={_car.id} delete_car={this.props.delete_car}></Car>
            //);
          //return null;

          //_car.year > 2020 ? (<Car car={_car} key={_car.id} delete_car = {this.props.delete_car} />) : null
        }
      </div>
    );
  }
}

export default Garage;
