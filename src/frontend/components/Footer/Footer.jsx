import React from 'react';
import './Footer.css';
import IconLink from '../elements/IconLink/IconLink';

function Footer() {
    const redes = [
        {imagen: 'behance.svg', url: '/'},
        {imagen: 'codepen.svg', url: '/'},
        {imagen: 'facebook.svg', url: '/'},
        {imagen: 'github.svg', url: '/'},
        {imagen: 'instagram.svg', url: '/'},
        {imagen: 'linkedin.svg', url: '/'},
        {imagen: 'twitter.svg', url: '/'}
    ]
    return (
        <footer className="footer">
            <div className="container">
                <ul className="socials">
                    {
                        redes.map((icono, key) => {
                            return (
                                <IconLink 
                                    key={key}
                                    url={icono.url}
                                    image={require(`../../../resources/img/socialIcons/${icono.imagen}`)}
                                />
                            )
                        })
                    }
                </ul>
                <p>© Jorge Aguilar</p>
            </div>
        </footer>
    )
}

export default Footer;