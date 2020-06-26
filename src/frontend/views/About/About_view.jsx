import React from 'react';
import { motion } from 'framer-motion';
import './About_view.css';
import DecoLink from '../../components/elements/DecoLink/DecoLink';

function AboutView(props) {
    const {altura} = props;

     //Motion Anim
     const animVariants = {
        fromBottom: {
            init: {
                y: '50px',
                opacity: 0
            },
            enter: delay => ({
                y: 0,
                opacity: 1,
                transition: {
                    delay: delay,
                    duration: .5
                }
            }),
            exit: {
                y: '50px',
                opacity: 0
            }
        },
        scale: {
            init: {
                scale: 0,
                opacity: 0
            },
            enter: delay => ({
                scale: 1,
                opacity: 1,
                transition: {
                    delay: delay,
                    duration: .5
                }
            }),
            exit: {
                scale: 0,
                opacity: 0
            }
        },
        opacity: {
            init: {
                opacity: 0,
                y: '-50px'
            },
            enter: delay => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: delay,
                    duration: .5
                }
            }),
            exit: {
                opacity: 0,
                y: '-50px'
            }
        }
    };

    return (
        <motion.section className="aboutSection" style={{minHeight: altura}} initial="init" animate="enter" exit="exit">
            <div className="container">
                <div className="miniContainer">
                    <div className="photoWrap">
                        <motion.div className="color" custom={.5} variants={animVariants.opacity}></motion.div>
                        <motion.div className="photo" custom={.7} variants={animVariants.scale} style={{backgroundImage: `url(${require('../../../resources/img/photoThumb.png')})`}}></motion.div>
                    </div>
                    <div className="texts">
                        <motion.h1 className="text big" custom={.9} variants={animVariants.fromBottom}>Me siento afortunado de que mi trabajo sea una de mis pasiones</motion.h1>
                        <motion.p className="text desc" custom={1.1} variants={animVariants.fromBottom}>Actualmente trabajo como desarrollador front-end en <DecoLink txt="Consultora Mexicana" url="https://consultoramexicana.com/" target="_blank" />, empresa con sede en Cd.Victoria, Tamaulipas.</motion.p>
                        <motion.p className="text desc" custom={1.3} variants={animVariants.fromBottom}>Me especialicé en el desarrollo front-end, pero también estoy abierto a probar y aprender nuevas tecnologías.</motion.p>
                        <motion.p className="text desc" custom={1.5} variants={animVariants.fromBottom}>Disfruto colaborando en proyectos interesantes de los que puedo sentirme orgulloso.</motion.p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
  
export default AboutView;