/* global google */
import React, { PureComponent } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'

const MapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCB6ev1CbOMYE4o8GlGnma-cP6EPbSJmRU&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ width: `100%`, height: `100%` }} />,
    containerElement: <div style={{ width: `100%`, height: `100%` }} />,
    mapElement: <div style={{ width: `100%`, height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const { incident, onMarkerClick } = props;
  const coords = incident.getLatLong();
  return <GoogleMap defaultZoom={16} defaultCenter={coords}>
    <InfoBox
      defaultPosition={new google.maps.LatLng(coords.lat + 0.002, coords.lng +  + 0.001)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `black`, opacity: 0.75, padding: `20px`, width: `200px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#ffffff` }}>
          <p>{incident.getName()}</p>
          <p>{incident.getAddressString()}</p>
          <p>{incident.getOpenTime()}</p>
          <p>{incident.getSubType()}</p>
          <span style={{ fontSize: `11px` }}>{incident.getDescription()}</span>
        </div>
      </div>
    </InfoBox>
    <Marker position={coords} onClick={onMarkerClick} />}
  </GoogleMap>
})

class MapView extends PureComponent {
  render() {
    return <MapComponent {...this.props}/>
  }
}

export { MapView }
export default MapView;
