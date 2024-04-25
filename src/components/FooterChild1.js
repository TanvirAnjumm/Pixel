import React from 'react';
import map from '../assents/map.png'; 
import map1 from '../assents/map1.png';
import map2 from '../assents/map2.png';

function FooterChild1() {
  return (
    <div className="map-grid-container">
        <div className="map-grid">
            <img src={map}  alt="Logo"/>
            <div>
                <p className='pStyle2' style={{color : "white"}}>Come visit us</p>
                <img src={map1} />
                <img src={map2} />
            </div>
        </div>
    </div>

  );
}

export default FooterChild1;