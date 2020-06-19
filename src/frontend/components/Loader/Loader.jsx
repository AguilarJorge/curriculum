import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import './Loader.css';

function Loader(props) {
  const {firstTime, visible, css, texto} = props;
  const loaderRef = useRef(null);

  return (
    <Transition nodeRef={loaderRef} in={visible} timeout={firstTime ? 1000 : 500}>
      {animState => {
        return (
          <div ref={loaderRef} className={`loader ${animState} ${(firstTime ? 'firsTime':'')}`}>
            <p className="myName" style={css}>{texto}</p>
          </div>
        )
      }}
    </Transition>
  )
}

export default Loader;