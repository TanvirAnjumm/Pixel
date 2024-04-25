import React from 'react';
import Rectangle from '../assents/Rectangle.png'; 
import Rectangle20 from '../assents/Rectangle 20.png'; 
import Rectangle21 from '../assents/Rectangle 21.png'; 
import ImgContentInsideGrid from './ImgContentInsideGrid';

function ImgContentGrid() {
    const images = [
        Rectangle
    ];

    const imagesInside = [
        Rectangle20,
        Rectangle21
    ];
  
    return (
      <div className="image-grid-container">
        <div className="image-grid">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
          <div>
            <h3>New to photography? Let us help!</h3>
            <p className='pStyle'>We offer a variety of written & recorded guides for all aspects of photography, ranging from equipment handling to artistic theory.</p>
            <form>
                <div className="search-wrapper">
                    <input type="search" placeholder="Search guides" className="search-input" />
                </div>
            </form>
            <ImgContentInsideGrid/>
          </div>
        </div>
      </div>
    );
  }
  
  export default ImgContentGrid;