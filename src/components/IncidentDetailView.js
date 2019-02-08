import React, { PureComponent } from 'react';
import { CircleLoader } from 'react-spinners';
import WeatherClient from '../helpers/WeatherClient';
import WeatherView from './WeatherView';

class IncidentDetailView extends PureComponent {
  state = {}

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    const latLong = this.props.incident.getLatLong();
    WeatherClient.connect()
      .currentAt(latLong)
      .then(this.onWeatherLoaded.bind(this));
  }

  onWeatherLoaded(weatherData) {
    this.setState({ weatherData, loading: false });
  }

  render() {
    return (
      <div className='popup'>
        <CircleLoader
          sizeUnit={"px"}
          size={75}
          color={'#ffffff'}
          loading={this.state.loading}
        />
        {this.state.weatherData 
          ? <WeatherView data={this.state.weatherData}/>
          : ''}
      </div> 
    )
  }
}

export { IncidentDetailView };
export default IncidentDetailView;
