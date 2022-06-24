import {memo, useState} from "react";
import './index.css'

const Layer = () => {
  const [showLayerOption, setShowLayerOption] = useState(false)
  const [selectedLayer, setSelectedLayer] = useState({ kelurahan: false, kecamatan: false, jembatan: false, jalan: false })

  const selectLayer = (e) => {
    const tmp = selectedLayer
    tmp[e] = !tmp[e];
    setSelectedLayer(tmp)
    setShowLayerOption(!showLayerOption)
  }

  console.log('s', selectedLayer)
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
            <div className={selectedLayer?.kelurahan ? 'active' : ''} onClick={() => selectLayer('kelurahan')}>
              <img alt="" className="img-layer" src="/img/kelurahan.png" width={60}/>
              {selectedLayer?.kelurahan && (<img alt="" className="check" src="/img/check.png" width={20}/>)}
            </div>
            <div>Keluarahan</div>
          </div>
          <div className="item-layer">
            <div className={selectedLayer?.kecamatan ? 'active' : ''} onClick={() => selectLayer('kecamatan')}>
              <img alt="" className="img-layer" src="/img/kecamatan.png" width={60}/>
              {selectedLayer?.kecamatan && (<img alt="" className="check" src="/img/check.png" width={20}/>)}
            </div>
            <div>Kecamatan</div>
          </div>
        </div>
        <div className="title-layer">Objek Peta</div>
        <div className="con-layer">
          <div className="item-layer">
            <div className={selectedLayer?.jembatan ? 'active' : ''} onClick={() => selectLayer('jembatan')}>
              <img alt="" className="img-layer" src="/img/jembatan.png" width={60}/>
              {selectedLayer?.jembatan && (<img alt="" className="check" src="/img/check.png" width={20}/>)}
            </div>
            <div>Jembatan</div>
          </div>
          <div className="item-layer">
            <div className={selectedLayer?.jalan ? 'active' : ''} onClick={() => selectLayer('jalan')}>
              <img alt="" className="img-layer" src="/img/jalan.png" width={60}/>
              {selectedLayer?.jalan && (<img alt="" className="check" src="/img/check.png" width={20}/>)}
            </div>
            <div>Jalan</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Layer);
