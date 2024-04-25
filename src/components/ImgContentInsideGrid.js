import React from 'react';
import Rectangle20 from '../assents/Rectangle 20.png'; 
import Rectangle21 from '../assents/Rectangle 21.png'; 

function ImgContentInsideGrid() {

    const imagesInside = [
        Rectangle20,
        Rectangle21
    ];
  
    return (
        <>
            <div className="imageInside-grid-container">
                <div className="imageInside-grid">
                    <div>
                        <img src={imagesInside[0]} alt={`Image 1`} />
                    </div>
                    <div>
                        <h4>Image Editing</h4>
                        <p className='pStyle2'>Learn the basics of Adobe Lightroom and elevate your photos to a new standard.</p>
                        <span className='spanStyle2'>Read More</span>
                    </div>
                </div>
            </div>

            <div className="imageInside-grid-container">
                <div className="imageInside-grid">
                    <div>
                        <img src={imagesInside[1]} alt={`Image 2`} />
                    </div>
                    <div>
                        <h4>Composition</h4>
                        <p className='pStyle2'>Master the art of creating visually appealing photography that tells a story, with practical tips and examples.</p>
                        <span className='spanStyle2'>Read More</span>
                    </div>
                </div>
            </div>
        </>

    );
  }
  
  export default ImgContentInsideGrid;