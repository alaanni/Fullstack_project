import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import GOOGLE_API_KEY from '../utils/config'

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 62.79446,
  lng: 22.82822
};

class Map extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey={GOOGLE_API_KEY.GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}
export default Map