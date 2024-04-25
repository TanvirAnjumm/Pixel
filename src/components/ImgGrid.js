import React from 'react';
import Image1 from '../assents/Group1.png'; 
import Image2 from '../assents/Group2.png'; 
import Image3 from '../assents/Group3.png'; 

function ImgGrid() {
    const images = [
      Image1,
      Image2,
      Image3,
    ];
  
    return (
      <div className="image-grid-container">
        <div className="image-grid">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
          </div>
      </div>
    );
  }
  
  export default ImgGrid;