import React, { Component } from "react";

class Garage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {
          (this.props.cars.map(_car => (
            <div key={_car.id}>
              <p>Brand: {_car.brand}</p>
              <p>Model: {_car.model}</p>
              <p>Year: {_car.year}</p>
              <p style={{color: _car.color}}>Color: {_car.color}</p>
              <hr />
            </div>
          )))
        }
      </div>
    );
  }
}

export default Garage;
