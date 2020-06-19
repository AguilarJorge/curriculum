import React from 'react';
import './Cursor.css';

function Cursor(props) {
    const {coords, hoverType} = props;
    
    return (
      <div className={'cursor ' + hoverType} style={{top: coords.posY, left: coords.posX}}></div>
    );
  }
  
  export default Cursor;