import React from 'react';
import css from './CircleButton.module.css';

function CircleButton(props) {
    const {modifierClass, icon, handleClick} = props;

    return (
        <div onClick={handleClick} className={css['button'] + ` isClickable ${modifierClass}`}>
            <div className={css['icon']} style={{backgroundImage: `url(${icon})`}}></div>
        </div>
    )
}

export default CircleButton;