import React from 'react';
import css from './DecoLink.module.css';

function DecoLink(props) {
    const {txt, url, target} = props;
    return (
        <a className={css['link'] + ' isExternaLink'} href={url} target={target} rel="noopener noreferrer">{txt}</a>
    )
}

export default DecoLink;