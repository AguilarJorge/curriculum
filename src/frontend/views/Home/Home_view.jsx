import React from 'react';
import estilacho from './Home_view.module.css';

function HomeView(props) {
    const {altura} = props;

    return (
      <section className={estilacho['viewSection']} style={{minHeight: altura}}>
          <div className={estilacho['container']}>
              <div className={estilacho['colorBox']}></div>
              <div className={estilacho['txt']}>
                  <h1 className={estilacho['im']}>Hola! Soy Jorge,<br/><span>Front-end Developer</span></h1>
                  <span className={estilacho['lov']}>Javascript<b>❤</b></span>
              </div>
          </div>
      </section>
    );
  }
  
  export default HomeView;