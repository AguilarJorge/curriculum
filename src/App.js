import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//Views
import HomeView from './frontend/views/Home/Home_view';
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
  //Global handlers
  const [clickable, setClickable] = useState(false);
  document.onmouseover = e => {
    e.target.classList.contains('isClickable') ? setClickable(true) : setClickable(false);
  }
  
  
  return (
    <section className="mainScreen" onMouseMove={getPosicion}>
      <Loader firstTime={firstLoaderTime} visible={loader} css={dynamicStyle.loader}/>
      <div className="background"></div>
      <section className="mainContent">
        <Router>
          <div ref={headerRef}>
            <Header showLoader={handleShowLoader}/>
          </div>
          <section className="routeView" style={dynamicStyle.section}>
            <Switch>
              <Route exact path="/"><HomeView altura={dynamicStyle.section.height}/></Route>
              <Route path="/portafolio"><Work /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/contacto"><Contact /></Route>
            </Switch>
          </section>
        </Router>
        <div ref={footerRef}>
          <Footer />
        </div>
      </section>
      <Cursor coords={posicion} isClickableHover={clickable}/>
    </section>
  );
}

export default App;

function Work() {
  return <h2>Work</h2>
}
function About() {
  return <h2>About</h2>
}
function Contact() {
  return <h2>Contact</h2>
}