import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import css from './Generic.module.css';

function Generic(props) {
    const {altura} = props;
    const history = useHistory();
    const csStyle = {
        section: {
            minHeight: altura,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            aligenItems: 'center',
            justifyContent: 'center',
            alignContent: 'center'
        }
    }
    const animVariants = {
        opacity: {
            init: {opacity: 0},
            enter: {
                opacity: 1,
                transition: {
                    duration: .5,
                    staggerChildren: .1
                }
            },
            exit: {opacity: 0}
        },
        fromTop: {
            init: {
                y: '-50px',
                opacity: 0
            },
            enter: {
                y: 0,
                opacity: 1,
            },
            exit: {
                y: '-50px',
                opacity: 0
            }
        }
    };

    return (
        <motion.section className="notFoundSection" style={csStyle.section} initial="init" animate="enter" exit="exit">
            <motion.div className={css['container']} variants={animVariants.opacity}>
                <pre className={css['code']}>
                    <motion.div variants={animVariants.fromTop} className="line"><span className={css['comment']}>{`// 404 page not found.`}</span></motion.div>
                    <motion.div variants={animVariants.fromTop} className="line"><span className={css['jsfx']}>if </span>(!<span className={css['args']}>found</span>) {`{`}</motion.div>
                    <motion.div variants={animVariants.fromTop} className={'line ' + css['ident1']}><span className={css['jsfx']}>throw</span> (<span className={css['string']}>"(╯°□°)╯︵ ┻━┻"</span>);</motion.div>
                    <motion.div variants={animVariants.fromTop} className="line">{`}`}</motion.div>
                    <motion.div variants={animVariants.fromTop} className="line"><span className={css['comment']}>{`//`}</span></motion.div>
                    <motion.div variants={animVariants.fromTop} className={css['actions']}>
                        <div className={css['link'] + ' isClickable'} onClick={() => history.goBack()}>Regresar</div> o <Link className={css['link'] + ' isClickable'} to="/">ir al inicio!!</Link>
                    </motion.div>
                </pre>
            </motion.div>
        </motion.section>
    );
}
  
export default Generic;