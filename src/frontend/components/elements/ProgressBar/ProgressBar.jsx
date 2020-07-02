import React, { useEffect, useRef } from 'react';

function ProgressBar(props) {
    const {currentPos, numTotal, duracion} = props;
    const barRef = useRef();

    useEffect(() => {
        let count = 0;
        let animacion = setInterval(() => {
            count++;
            barRef.current.style.width = `${count}%`
        }, duracion / 100)
        return () => clearInterval(animacion);
    }, [currentPos, duracion])

    return (
        <div className="progressBar">
            <div className="indicators"><span className="num">{currentPos}</span>/<span className="num">{numTotal}</span></div>
            <div className="bar">
                <div ref={barRef} className="inner"></div>
            </div>
        </div>
    )
}

export default ProgressBar;