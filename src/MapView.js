import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCB6ev1CbOMYE4o8GlGnma-cP6EPbSJmRU&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ width: `100%`, height: `100%` }} />,
    containerElement: <div style={{ width: `100%`, height: `100vw` }} />,
    mapElement: <div style={{ width: `100%`, height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const { incident} = props;
  const { coords } = incident;
  return <GoogleMap defaultZoom={8} defaultCenter={coords}>
    {props.isMarkerShown && <Marker position={coords} onClick={props.onMarkerClick.bind(incident)} />}
  </GoogleMap>
})

class MapView extends React.PureComponent {
  handleMarkerClick = () => {
    alert(1);
  }

  render() {
    return (
      <MapComponent
        isMarkerShown={true}
        onMarkerClick={this.handleMarkerClick}
        {...this.props}
      />
    )
  }
}

export { MapView }
export default MapView;
