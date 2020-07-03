import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.css';

//Views
import HomeView from './frontend/views/Home/Home_view';
import WorkView from './frontend/views/Work/Work_view';
import AboutView from './frontend/views/About/About_view';
import ContactView from './frontend/views/Contact/Contact_view';
import Generic404 from './frontend/views/404/Generic/Generic';
//Components
import Loader from './frontend/components/Loader/Loader';
import Header from './frontend/components/Header/Header';
import Footer from './frontend/components/Footer/Footer';
//Elementos
import Cursor from './frontend/components/elements/Cursor/Cursor';

function App() {
  const [showName, setShowName] = useState(false);
  const [loader, setLoader] = useState(true);
  const [firstLoaderTime, setFirstLoaderTime] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [posicion, setPosicion] = useState({});
  const [hoverType, setHoverType] = useState('');
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const dynamicStyle = {
    loader: {
      opacity: showName ? 1 : 0,
      transform: showName ? 'scale(1)' : 'scale(1.1)'
    },
    section: {
      height: `calc(100vh - ${headerHeight + footerHeight}px)`
    }
  }
  
  useEffect(() => {
    document.onmouseover = e => {
      if (e.target.classList.contains('isClickable')) {
        setHoverType('hoverClickable')
      } else if (e.target.classList.contains('isExternaLink')) {
        setHoverType('hoverExternaLink');
      } else if (e.target.classList.contains('isInternaLink')) {
        setHoverType('hoverInternaLink');
      } else {
        setHoverType('');
      }
    }
    setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    setFooterHeight(footerRef.current.getBoundingClientRect().height);
    
    setTimeout(function(){
      setShowName(true)
    }, 1000)
    setTimeout(function(){
      setShowName(false)
      setLoader(false)
    }, 3000)
  }, [headerHeight, footerHeight]);
  
  const handleShowLoader = e => {
    setFirstLoaderTime(false)
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 500);
  }
  const getPosicion = e => {
    setPosicion({posX: e.clientX, posY: e.clientY})
  }
  
  return (
    <section className="mainScreen" onMouseMove={getPosicion}>
      <Loader firstTime={firstLoaderTime} visible={loader} css={dynamicStyle.loader} texto="Jorge Aguilar"/>
      <div className="background"></div>
      <section className="mainContent">
        <Router>
          <div ref={headerRef}>
            <Header showLoader={handleShowLoader}/>
          </div>
          <section className="routeView" style={dynamicStyle.section}>
            <Route render={({location}) => {
              return (
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch location={location} key={location.pathname}>
                    <Route exact path="/"><HomeView altura={dynamicStyle.section.height} nombre="Jorge" puesto="Front-end Developer"/></Route>
                    <Route exact path="/portafolio"><WorkView altura={dynamicStyle.section.height} timerSlider="5000" /></Route>
                    <Route path="/about"><AboutView altura={dynamicStyle.section.height} /></Route>
                    <Route path="/contacto"><ContactView altura={dynamicStyle.section.height} /></Route>
                    <Route path="/404"><Generic404 altura={dynamicStyle.section.height} /></Route>
                    <Redirect to="/404" />
                  </Switch>
                </AnimatePresence>
              )
            }}
            />
          </section>
        </Router>
        <div ref={footerRef}>
          <Footer />
        </div>
      </section>
      <Cursor coords={posicion} hoverType={hoverType}/>
    </section>
  );
}

export default App;