import React from 'react';
import { motion } from 'framer-motion';
import estilacho from './Home_view.module.css';

function HomeView(props) {
    const {altura, nombre, puesto} = props;

    //Motion Anim
    const animVariants = {
        colorBox: {
            init: {
                scale: 0,
                y: 0,
                rotateY: '10deg',
                opacity: 1
            },
            enter: {
                scale: 1,
                rotateY: '10deg',
                transition: {
                    delay: .5,
                    duration: .5
                }
            },
            exit: {
                y: '50%',
                opacity: 0,
                transition: {
                    duration: .5
                }
            }
        },
        myInfo: {
            init: {
                y: 0,
                x: '50%',
                opacity: 0
            },
            enter: {
                x: '0%',
                opacity: 1,
                transition: {
                    delay: .8,
                    duration: .5
                }
            },
            exit: {
                y: '-50%',
                opacity: 0
            }
        },
        badge: {
            init: {
                y: '100%',
                scale: 1,
                opacity: 0
            },
            enter: {
                y: '0%',
                opacity: 1,
                transition: {
                    delay: 1,
                    duration: .5
                }
            },
            exit: {
                scale: 0,
                opacity: 0
            }
        }
    };

    return (
        <motion.section className={estilacho['viewSection']} style={{minHeight: altura}} initial="init" animate="enter" exit="exit">
            <motion.div className={estilacho['container']}>
                <motion.div className={estilacho['colorBox']} variants={animVariants.colorBox}/>
                <div className={estilacho['txt']}>
                    <motion.h1 className={estilacho['im']} variants={animVariants.myInfo}>
                        Hola! Soy {nombre},<br/><span>{puesto}</span>
                    </motion.h1>
                    <motion.span className={estilacho['lov']} variants={animVariants.badge}>
                        Javascript<b>❤</b>
                    </motion.span>
                </div>
            </motion.div>
        </motion.section>
    );
  }
  
  export default HomeView;