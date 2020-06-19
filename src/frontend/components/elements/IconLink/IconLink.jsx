import React from 'react';
import css from './IconLink.module.css';

function IconLink(props) {
    const {url, image} = props;
    return (
        <li className={css['link']}>
            <a className={css['icon'] + ' isExternaLink'} href={url} target="_blank" rel="noopener noreferrer" style={{backgroundImage: `url(${image})`}}> </a>
        </li>
    )
}

export default IconLink;