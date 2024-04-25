import React from 'react';
import a from '../assents/a.png'; 
import b from '../assents/b.png'; 
import c from '../assents/c.png'; 
import d from '../assents/d.png'; 
import e from '../assents/e.png'; 

function OrderComponent() {

    const images = [
        a,b,c,d,e
    ];

  return (
    <div className="photo-grid-container">
    <div className="photo-grid">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
      <div>
      </div>
    </div>
  </div>
  );
}

export default OrderComponent;
