import React from 'react';
import f1 from '../assents/Group 210.png'; 
import f2 from '../assents/Group 211.png'; 


function FeaturedChild() {
    const images = [
        f1, f2, f1
    ];
  
    return (
      <div className="f-grid-container">
        <h4 style={{paddingBottom: "5px"}}>Top sellers this month</h4>
        <div className="f-grid">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
          <div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FeaturedChild;