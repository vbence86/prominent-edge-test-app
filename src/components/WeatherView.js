import React, { PureComponent } from 'react';

class WeatherView extends PureComponent {
  render() {
    const { current } = this.props.data;
    const { icon, text } = current.condition;
    const { temp_f, wind_dir, wind_mph, vis_miles } = current;
    return (
      <div className="weather-container">
        <img src={`http://${icon}`} width="80" height="80" alt="current weather condition"/>
        <p>{text} {`${temp_f}ºF`}</p>
        <p>{`Wind: ${wind_mph}mph (${wind_dir})`}</p>
        <p>{`Visibility: ${vis_miles} miles`}</p>
      </div> 
    )
  }
}

export { WeatherView };
export default WeatherView;
