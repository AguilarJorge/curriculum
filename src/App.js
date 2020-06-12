import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Loader from './frontend/components/Loader/Loader';
import Header from './frontend/components/Header/Header';
import Footer from './frontend/components/Footer/Footer';

function App() {
  const [showName, setShowName] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(function(){
      setShowName(true)
    }, 1000)
    setTimeout(function(){
      setShowName(false)
      setLoader(false)
    }, 3000)
  }, []);

  const dynamicStyle = {
    loader: {
      opacity: showName ? 1 : 0,
      transform: showName ? 'scale(1)' : 'scale(1.1)'
    }
  }
  
  return (
    <section className="mainScreen">
      <Loader visible={loader} css={dynamicStyle.loader}/>
      <div className="background"></div>
      <section className="mainContent">
        <Router>
          <Header />
            <section className="routeView">
              <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/portafolio"><Work /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/contacto"><Contact /></Route>
              </Switch>
            </section>
        </Router>
        <Footer />
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