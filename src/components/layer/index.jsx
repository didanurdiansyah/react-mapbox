import {memo, useState} from "react";
import './index.css'

const Layer = () => {
  const [showLayerOption, setShowLayerOption] = useState(false)

  

  return (
    <>
      <div onClick={() => setShowLayerOption(!showLayerOption)} className="layer-button">
        <div><img alt="" src="/img/layer-button.png" width={60}/></div>
        <div className="layer-title"><img alt="" src="/img/kelurahan.png" width={10}/> Layer</div>
      </div>
      <div className={["layer", showLayerOption ? 'd-show' : 'd-none'].join(' ')}>
        <div className="title-layer">Jenis Peta</div>
        <div className="con-layer">
          <div className="item-layer">
            <div onClick={() => setShowLayerOption(!showLayerOption)}>
              <img alt="" src="/img/kelurahan.png" width={60}/>
            </div>
            <div>Keluarahan</div>
          </div>
          <div className="item-layer">
            <div onClick={() => setShowLayerOption(!showLayerOption)}>
              <img alt="" src="/img/kecamatan.png" width={60}/>
            </div>
            <div>Kecamatan</div>
          </div>
        </div>
        <div className="title-layer">Objek Peta</div>
        <div className="con-layer">
          <div className="item-layer">
            <div onClick={() => setShowLayerOption(!showLayerOption)}>
              <img alt="" src="/img/jembatan.png" width={60}/>
            </div>
            <div>Jembatan</div>
          </div>
          <div className="item-layer">
            <div onClick={() => setShowLayerOption(!showLayerOption)}>
              <img alt="" src="/img/jalan.png" width={60}/>
            </div>
            <div>Jalan</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Layer);
