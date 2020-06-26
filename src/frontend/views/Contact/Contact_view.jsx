import React from 'react';
import { motion } from 'framer-motion';
import './Contact_view.css';
import DecoLink from '../../components/elements/DecoLink/DecoLink';

function ContactView(props) {
    const {altura} = props;

    //Motion Anim
    const animVariants = {
        fromBottom: {
            init: {
                y: '50px',
                opacity: 0
            },
            enter: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: .3
                }
            },
            exit: {
                y: '50px',
                opacity: 0
            }
        },
        invisible: {
            init: {
                scale: 0
            },
            enter: {
                scale: 1,
                transition: {
                    delay: .5,
                    duration: .3,
                    staggerChildren: .1,
                    delayChildren: .5
                }
            },
            exit: {
                scale: 0
            }
        }
    };

    return (
        <motion.section className="contactSection" style={{minHeight: altura}} initial="init" animate="enter" exit="exit">
            <div className="container">
                <motion.div className="miniContainer" variants={animVariants.invisible}>
                    <motion.h1 className="text big" variants={animVariants.fromBottom}>¡Ponte en contacto!</motion.h1>
                    <motion.p className="text desc" variants={animVariants.fromBottom}>Escribeme un correo: <DecoLink txt="jorge@ag.dev" url="mailto:jorgeluis_942009@hotmail.com" /></motion.p>
                    <motion.p className="text desc" variants={animVariants.fromBottom}>Llamame a mi telefono <DecoLink txt="834 - 255 - 7085" url="tel:8342557085" /> o enviame un <DecoLink txt="whatsapp" url="https://api.whatsapp.com/send?phone=5218342557085" target="_blank"/></motion.p>
                    <motion.p className="text desc" variants={animVariants.fromBottom}>Buscame en <DecoLink txt="Facebook" url="https://www.facebook.com/jorgee.aguilar.3/" target="_blank"/> o en <DecoLink txt="Twitter" url="https://twitter.com/JorgDev" target="_blank"/></motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
}
  
export default ContactView;