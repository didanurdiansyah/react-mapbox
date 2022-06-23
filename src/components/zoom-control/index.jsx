import {memo} from "react";
import './index.css'

const layer = ({ onZoomIn, onZoomOut }) => {

  return (
    <div className="control-zoom">
        <button onClick={onZoomIn} className="btn-zoom-top">
            <img alt="" src="/img/plus.svg" width={20} />
        </button>
        <button onClick={onZoomOut} className="btn-zoom-bottom">
            <img alt="" src="/img/minus.svg" width={20} />
        </button>
    </div>
  );
};

export default memo(layer);
