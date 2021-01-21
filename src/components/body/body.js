import React from 'react';

import slide2 from './images/slide2.jpg';
import './body.css';

const Body = () => {
  return (
    
      <div className="slideImage">
        
        <img src={slide2} className="sl2" alt="slide-2" width='100%' /> 
        <div className="sl3">
          <p className="label">Оптимальні правові рішення</p>
        </div>
        
        
        
      </div>

  );
};

export default Body;
