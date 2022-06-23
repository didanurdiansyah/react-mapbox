import React, { useRef, useEffect } from 'react';
import Map, {GeolocateControl, Marker} from 'react-map-gl';
import './index.css';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const MapBox = ({ zoom }) => {
  console.log(zoom);
  const markerList = [{

  }]
  
  return (
    <Map
      initialViewState={{
        longitude: 107.62485963905166,
        latitude: -6.925569251706642,
        zoom: zoom
      }}
      zoom={zoom}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"
    >
      <GeolocateControl 
        showUserLocation 
        showUserHeading
        trackUserLocation
        position={'bottom-left'}
        showAccuracyCircle
      />
      <Marker longitude={107.6065510208576} latitude={-6.94135924924411} anchor="bottom" >
        <img alt='' src="/img/ballon-marker.png" width={30}/>
      </Marker>
    </Map>
  );
};

export default MapBox;
