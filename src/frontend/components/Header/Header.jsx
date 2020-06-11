import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Header.css';

function Header() {
    const [estilo, setEstilo] = useState({});
    const [isHome, setIsHome] = useState(true);
    const refPortafolio = useRef(null);
    const refAbout = useRef(null);
    const refContacto = useRef(null);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (location.pathname === '/') {
            setEstilo({width: 0})
            setIsHome(true)
        } else {
            let links = document.querySelectorAll('.link');
            setIsHome(false)
            links.forEach(link => {
                if (link.pathname === location.pathname) {
                    setEstilo({
                        width: link.getBoundingClientRect().width,
                        left: link.offsetLeft
                    })
                }
            });
        }
    }, [location])

    const handleClick = e => {
        setEstilo({
            width: e.currentTarget.getBoundingClientRect().width,
            left: e.offsetLeft
        })
    }
    const toHome = () => {
        if (isHome) return false;
        history.push('/');
    }
    
    return (
        <header className="mainHeader">
            <div className="container">
                <h2 className={isHome ? "logo home" : "logo"} onClick={toHome}></h2>
                <nav className="links">
                    <Link ref={refPortafolio} onClick={handleClick} to="/portafolio" className="link">Portafolio</Link>
                    <Link ref={refAbout} onClick={handleClick} to="/about" className="link">Sobre Mi</Link>
                    <Link ref={refContacto} onClick={handleClick} to="/contacto" className="link">Contacto</Link>
                    <span className="currentIndicator" style={estilo}></span>
                </nav>
            </div>
        </header>
    )
}

export default Header;