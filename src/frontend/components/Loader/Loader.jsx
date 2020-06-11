import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import './Loader.css';

function Loader(props) {
  const {visible, css} = props;
  const loaderRef = useRef(null);

  return (
    <Transition nodeRef={loaderRef} unmountOnExit in={visible} timeout={1000}>
      {animState => {
        return (
          <div ref={loaderRef} className={"loader " + animState}>
            <p className="myName" style={css}>Jorge Aguilar</p>
          </div>
        )
      }}
    </Transition>
  )
}

export default Loader;