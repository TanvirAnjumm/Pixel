import React from 'react';
import map from '../assents/map.png'; 
import FooterChild1 from './FooterChild1';
import logo from '../assents/logo.png';

function FooterComponent() {
  return (
    <div className="foot1-grid-container">
        <div className="foot1-grid">
            <FooterChild1/>
            <img src={logo} alt="Logo" style={{ marginTop: '2%', marginLeft: '40%', width: '15%', height: '15%' }}/>
            <div>
                <p className='pStyle2' style={{color : "white"}}>
                    Join our newsletter for exclusive offers!
                </p>
                <form>
                <div className="search-wrapper">
                    <input type="search" placeholder="Name" className="search-input" />
                </div>
            </form>
            <form>
                <div className="search-wrapper">
                    <input type="search" placeholder="Email address" className="search-input" />
                </div>
            </form>
            </div>
        </div>
        <hr/>
    </div>

  );
}

export default FooterComponent;