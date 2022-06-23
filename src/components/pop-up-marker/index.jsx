import {memo} from "react";
import './index.css'

const layer = () => {

  return (
    <div className="popup">
        <div className="img-popup">
          <img alt="" src="/img/img-placeholder.png" height={90} width='100%' />
        </div>
        <div className="type-info-popup">
          <img alt="" src="/img/icon-jembatan.png" height={16} />
          Jembatan
        </div>
        <div className="label-popup">Jembatan Bojongloa Kidul</div>
        <div className="info-popup">
            <div>Panjang 100 Km &#8226 Lebar 100 Km</div>
        </div>
    </div>
  );
};

export default memo(layer);
