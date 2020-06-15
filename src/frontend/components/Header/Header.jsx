import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Header.css';

function Header(props) {
    const {showLoader} = props;

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
            setIsHome(true);
        } else {
            setIsHome(false);
            let links = document.querySelectorAll('.link');
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

    const animImdicator = e => {
        setEstilo({
            width: e.currentTarget.getBoundingClientRect().width,
            left: e.currentTarget.offsetLeft
        })
    }
    const activeLink = () => {
        if (location.pathname === '/') {
            setEstilo({width: 0})
        } else {
            let links = document.querySelectorAll('.link');
            links.forEach(link => {
                if (link.pathname === location.pathname) {
                    setEstilo({
                        width: link.getBoundingClientRect().width,
                        left: link.offsetLeft
                    })
                }
            });
        }
    }
    const toHome = () => {
        if (isHome) return false;
        history.push('/');
    }
    
    return (
        <header className="mainHeader">
            <div className="container">
                <div className={isHome ? "logo home" : "logo"} onClick={toHome}></div>
                <nav className="links" onMouseLeave={activeLink}>
                    <Link ref={refPortafolio} onMouseEnter={animImdicator} onClick={showLoader} to="/portafolio" className="link">Portafolio</Link>
                    <Link ref={refAbout} onMouseEnter={animImdicator} onClick={showLoader} to="/about" className="link">Sobre Mi</Link>
                    <Link ref={refContacto} onMouseEnter={animImdicator} onClick={showLoader} to="/contacto" className="link">Contacto</Link>
                    <span className="currentIndicator" style={estilo}></span>
                </nav>
            </div>
        </header>
    )
}

export default Header;