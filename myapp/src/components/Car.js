
import React, { Component } from 'react';

class Car extends Component {
    render() {
        //const brand = this.props.brand
        //const model = this.props.model
        //const color = this.props.color
        const {brand, model, color, year, id} = this.props.car
        return (
            <div key={id}>
              <p>Brand: {brand}</p>
              <p>Model: {model}</p>
              <p>Year: {year}</p>
              <p style={{color}}>Color: {color}</p>
              <button style={{color: 'red'}}>X</button>
              <hr />
            </div>)
    }
}

export default Car;