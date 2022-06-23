import {memo, useState} from "react";
import './index.css'

const Legend = () => {
  const [legendaShow, setLegendaShow] = useState(false);

  console.log('s', legendaShow)
  return (
    <div>
      <button 
        onClick={() => { setLegendaShow(!legendaShow) }} 
        className={['btn-legenda', legendaShow ? 'top' : 'bottom'].join(' ')}> 
         <img alt="" className={!legendaShow ? 'show' : 'hide'} src="/img/nav2.png" width={18}/>
         <img alt="" className={legendaShow ? 'show' : 'hide'} src="/img/nav.png" width={18}/>
      Legenda
    </button>
      <div className={['content-legenda', legendaShow ? 'show' : 'hide'].join(' ')}>
        <div className="item-content-legenda">
          <div className="poi-content-legenda">
            <img alt="" src="/img/batas_kec.png" width={20}/>
          </div>
          <div className="label-content-legenda">Batas Kecamatan</div>
        </div>
        <div className="item-content-legenda">
          <div className="poi-content-legenda">
            <img alt="" src="/img/batas_kelurahan.png" width={20}/>
          </div>
          <div className="label-content-legenda">Batas Kelurahan / Desa</div>
        </div>
        <div className="item-content-legenda">
          <div className="poi-content-legenda">
            <img alt="" src="/img/item-icon.png" width={20}/>
          </div>
          <div className="label-content-legenda">Jembatan</div>
        </div>
        <div className="divider">
          <div className="label-devider">Jenis-Jenis Jalan</div>
        </div>
        <div className="item-content-legenda">
          <div className="poi-content-legenda">
            <img alt="" src="/img/jalan_arteri_primer.png" width={20}/>
          </div>
          <div className="label-content-legenda">Jalan Arteri Primer</div>
        </div>
        <div className="item-content-legenda">
          <div className="poi-content-legenda">
            <img alt="" src="/img/jalan_kolektor_primer_1_2.png" width={20}/>
          </div>
          <div className="label-content-legenda">Jalan Kolektor Primer 1, 2</div>
        </div>
        <div className="item-content-legenda">
          <div className="poi-content-legenda">
            <img alt="" src="/img/jalan_kolektor_primer_3_4.png" width={20}/>
          </div>
          <div className="label-content-legenda">Jalan Kolektor Primer 3, 4</div>
        </div>
        <div className="item-content-legenda">
          <div className="poi-content-legenda">
            <img alt="" src="/img/jalan_lokal_primer_1_2_3.png" width={20}/>
          </div>
          <div className="label-content-legenda">Jalan Lokal Primer 1, 2, 3</div>
        </div>
        <div className="item-content-legenda">
          <div className="poi-content-legenda">
            <img alt="" src="/img/jalan_desa.png" width={20}/>
          </div>
          <div className="label-content-legenda">Jalan Desa / Lingkungan</div>
        </div>
        <div className="item-content-legenda">
          <div className="poi-content-legenda">
            <img alt="" src="/img/jalan_arteri.png" width={20}/>
          </div>
          <div className="label-content-legenda">
            Jalan Arteri Sekunder 1, 2, 3 <br />
            Jalan Kolektor Sekunder 1, 2, 3 <br />
            Jalan Lokal Sekunder 1, 2, 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Legend);