import {memo} from "react";
import './index.css'

const search = () => {

  return (
    <div className="search">
      <div>Cari berdasarkan Jenis Obyek</div>
      <div className="keyword-search">
        <span>Jalan</span>
        <span>Jembatan</span>
        <span>Kecamatan</span>
        <span>Desa/Kelurahan</span>
      </div>
    </div>
  );
};

export default memo(search);