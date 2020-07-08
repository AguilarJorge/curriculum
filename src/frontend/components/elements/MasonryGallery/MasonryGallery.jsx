import React from 'react';
import css from './MasonryGallery.module.css';

function MasonryGallery(props) {
    const {images, maxRows, imgSpace, alterClass} = props;

    return images === null ? 'cargando' : (
        <div className={`${css['gallery']} ${alterClass}`} style={{columnCount: (images.length >= maxRows ? maxRows : images.length), columnGap: imgSpace}}>
                {
                    images && images.map((img, key) => (
                        <img key={key} src={img.download_url} alt={`img_${key}`} style={{marginBottom: imgSpace}} />
                    ))
                }
        </div>
    )
}

export default MasonryGallery;