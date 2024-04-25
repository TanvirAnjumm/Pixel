import React from 'react';
import './common.css';
import NavigationBar from './components/NavigationBar';
import ImgSwiper from './components/ImgSwiper';
import ImgGrid from './components/ImgGrid';
import ImgContentGrid from './components/ImgContentGrid';
import OrderComponent from './components/OrderComponent';
import FeaturedProduct from './components/FeaturedProduct';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
        <NavigationBar className="navigationBar" />
        <ImgSwiper className="imgSwiper" />
        <ImgGrid/>
        <ImgContentGrid/>
        <OrderComponent/>
        <FeaturedProduct/>
        <FooterComponent/>
    </div>
  );
}

export default App;
