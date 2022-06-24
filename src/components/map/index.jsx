import React, { useMemo, useState } from 'react';
import Map, {GeolocateControl, Marker, Popup} from 'react-map-gl';
import PopUpMarker from '../pop-up-marker'
import './index.css';

const TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const MapBox = ({ zoom }) => {
  const [showPopUp, setShowPopUp] = useState(false)

  const pins = useMemo(
    () =>
        <Marker 
          longitude={107.6065510208576} 
          latitude={-6.94135924924411} 
          anchor="bottom" 
          onClick={e => {
            e.originalEvent.stopPropagation();
            setShowPopUp(true);
          }}
        >
          Tessdds
          <img alt='' src="/img/ballon-marker.png" width={80}/>
        </Marker>
      ,
    []
  );
  
  return (
    <Map
      initialViewState={{
        longitude: 107.62485963905166,
        latitude: -6.925569251706642,
        zoom: zoom,
        bearing: 0,
        pitch: 0
      }}
      zoom={zoom}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={TOKEN}
    >
      <GeolocateControl  position={'bottom-left'} />
      {showPopUp && (
        <Popup
          anchor="bottom"
          longitude={107.6099510200586} 
          latitude={-6.92485924924411} 
          onClose={() => setShowPopUp(false)}
        >
          <PopUpMarker />
        </Popup>
      )}
      {pins}
    </Map>
  );
};

export default MapBox;
