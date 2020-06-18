import React from 'react';
import './Cursor.css';

function Cursor(props) {
    const {coords, isClickableHover} = props;
    
    return (
      <div className={isClickableHover ? 'cursor hoverClicka' : 'cursor'} style={{top: coords.posY, left: coords.posX}}></div>
    );
  }
  
  export default Cursor;