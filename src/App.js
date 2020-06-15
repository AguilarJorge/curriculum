import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Loader from './frontend/components/Loader/Loader';
import Header from './frontend/components/Header/Header';
import Footer from './frontend/components/Footer/Footer';

function App() {
  const [showName, setShowName] = useState(false);
  const [loader, setLoader] = useState(true);
  const [firstLoaderTime, setFirstLoaderTime] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  
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
  
  const dynamicStyle = {
    loader: {
      opacity: showName ? 1 : 0,
      transform: showName ? 'scale(1)' : 'scale(1.1)'
    }
  }
  
  const handleShowLoader = e => {
    setFirstLoaderTime(false)
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 500);
  }
  
  
  return (
    <section className="mainScreen">
      <Loader firstTime={firstLoaderTime} visible={loader} css={dynamicStyle.loader}/>
      <div className="background"></div>
      <section className="mainContent">
        <Router>
          <div ref={headerRef}>
            <Header showLoader={handleShowLoader}/>
          </div>
          <section className="routeView" style={{height: `calc(100vh - (${headerHeight + footerHeight}px))`}}>
            <Switch>
              <Route exact path="/"><Home /></Route>
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
    </section>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>
}
function Work() {
  return <h2>Work</h2>
}
function About() {
  return <h2>About</h2>
}
function Contact() {
  return <h2>Contact</h2>
}