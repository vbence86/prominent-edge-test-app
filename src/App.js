import React, { Component } from 'react';
import MapView from './MapView';
import './App.css';

class App extends Component {
  state = {
    incident: {
      coords: {
        lat:-34.397,
        lng: 150.644,
      } 
    },
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MapView incident={this.state.incident}/>
        </header>
      </div>
    );
  }
}

export default App;
