
import React, { Component } from 'react';
import Car from './Car';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello React!</h1>
                <Car /><hr />
                <Car /><hr />
                <Car />
            </div>
        );
  }
}

export default App;
