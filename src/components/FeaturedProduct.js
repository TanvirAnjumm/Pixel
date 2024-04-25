import React from 'react';
import f from '../assents/f.png'; 
import FeaturedChild from './FeaturedChild';

function FeaturedProduct() {
    const images = [
        f
    ];
  
    return (
      <div className="image-grid-container">
        <h3 style={{paddingBottom: "5px"}}>Featured savings</h3>
        <div className="image-grid">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
          <div>
          <h3>Turn used gear into new possibilities</h3>
          <p className='pStyle2'>We offer a reliable platform for buying and selling used photography gear. Whether you're a beginner looking for affordable equipment or a professional photographer in search of high-end gear at a discounted price, we've got you covered. </p>
          <FeaturedChild/>
          <div className='btnWrapper'>
            <button className="button-style-1">Buy</button>
            <button className="button-style-2">Sell</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FeaturedProduct;