
import React, { Component } from 'react';

class Car extends Component {
    render() {
        //const brand = this.props.car.brand
        //const model = this.props.car.model
        //const color = this.props.car.color
        //const id = this.props.car.id
        const {brand, model, color, year, id} = this.props.car
        const css1 = { borderRadius: '5px', padding: '1px', borderStyle: 'ridge', 
        border: '2px solid ' + color , margin: '35px 50px' }
        return (
            <div key={id} style={css1}>
              <p>Brand: {brand} </p>
              <p>Model: {model}</p>
              <p>Year: {year}</p>
              <p style={{color}}>Color: {color}</p>
              <button style={{color: 'red'}} onClick={ () => this.props.delete_car(id) }>X</button>
            </div>)
    }
}

export default Car;