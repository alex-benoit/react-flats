import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class Map extends Component {
  render() {
    return (
      <GoogleMapReact
        center={{ lat: this.props.selectedFlat.lat, lng: this.props.selectedFlat.lng }}
        zoom={11}
      >
        <Marker
          lat={this.props.selectedFlat.lat}
          lng={this.props.selectedFlat.lng}
        />
      </GoogleMapReact>
    );
  }
}

export default Map;
