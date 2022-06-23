import "./App.css";
import Search from "./components/search";
import Legenda from "./components/legend";
import LoginButton from "./components/login-button";
import ZoomControl from "./components/zoom-control";
import Layer from "./components/layer"

import Map from "./components/map"

import { useState } from "react";

function App() {
  const [zoom, setZoom] = useState(12);

  const onZoomIn = () => {
    setZoom(zoom+0.5)
  }

  const onZoomOut = () => {
    setZoom(zoom-0.5)
  }
  
  return (
    <>
      <Map zoom={zoom}/>
      <Layer />
      <ZoomControl onZoomIn={onZoomIn} onZoomOut={onZoomOut}/>
      <LoginButton />
      <Search />
      <Legenda />
    </>
  );
}

export default App;
