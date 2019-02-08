import React, { Component } from 'react';
import IncidentDetailView from './components/IncidentDetailView';
import IncidentLoader from './components/IncidentLoader';
import MapView from './components/MapView';
import './App.css';

class App extends Component {
  state = {}

  constructor(props) {
    super(props);
    this.onIncidentLoaded = this.onIncidentLoaded.bind(this);
    this.onMarkerClicked = this.onMarkerClicked.bind(this);
  }

  onIncidentLoaded(incident) {
    this.setState({ incident });
  }

  onMarkerClicked(incident) {
  }

  render() {
    return (
      <div className="App">
        {this.state.incident 
          ? <MapView incident={this.state.incident} onMarkerClicked={this.onMarkerClicked}/>
          : <IncidentLoader onLoad={this.onIncidentLoaded}/>}
        {this.state.incident 
          ? <IncidentDetailView incident={this.state.incident}/> 
          : ''}
      </div>
    );
  }
}

export default App;
