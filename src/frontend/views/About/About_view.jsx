import React from 'react';
import { motion } from 'framer-motion';
import './About_view.css';
import DecoLink from '../../components/elements/DecoLink/DecoLink';

function AboutView(props) {
    const {altura} = props;

    return (
        <motion.section className="aboutSection" style={{minHeight: altura}} initial="init" animate="enter" exit="exit">
            <div className="container">
                <div className="miniContainer">
                    <div className="photoWrap">
                        <div className="color"></div>
                        <div className="photo" style={{backgroundImage: `url(${require('../../../resources/img/photoThumb.png')})`}}></div>
                    </div>
                    <div className="texts">
                        <h1 className="text big">Me siento afortunado de que mi trabajo sea una de mis pasiones</h1>
                        <p className="text desc">Actualmente trabajo como desarrollador front-end en <DecoLink txt="Consultora Mexicana" url="https://consultoramexicana.com/" target="_blank" />, empresa con sede en Cd.Victoria, Tamaulipas.</p>
                        <p className="text desc">Me especialicé en el desarrollo front-end, pero también estoy abierto a probar y aprender nuevas tecnologías.</p>
                        <p className="text desc">Disfruto colaborando en proyectos interesantes de los que puedo sentirme orgulloso.</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
  
export default AboutView;