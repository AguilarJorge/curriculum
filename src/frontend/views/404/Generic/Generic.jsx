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
        fromLeft: {
            init: {
                x: '-50px',
                opacity: 0
            },
            enter: delay => ({
                x: 0,
                opacity: 1,
                transition: {
                    delay: delay,
                    duration: .5
                }
            }),
            exit: {
                x: '-50px',
                opacity: 0
            }
        },
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
        }
    };

    return (
        <motion.section className="notFoundSection" style={csStyle.section} initial="init" animate="enter" exit="exit">
            <motion.div className={css['container']} variants={animVariants.fromLeft}>
                <pre className={css['code']}>
                    <div className="line"><span className={css['comment']}>{`// 404 page not found.`}</span></div>
                    <div className="line"><span className={css['jsfx']}>if </span>(!<span className={css['args']}>found</span>) {`{`}</div>
                    <div className={'line ' + css['ident1']}><span className={css['jsfx']}>throw</span> (<span className={css['string']}>"(╯°□°)╯︵ ┻━┻"</span>);</div>
                    <div className="line">{`}`}</div>
                    <div className="line"><span className={css['comment']}>{`//`}</span></div>
                    <div className={css['actions']}>
                        <div className={css['link'] + ' isClickable'} onClick={() => history.goBack()}>Regresar</div> o <Link className={css['link'] + ' isClickable'} to="/">ir al inicio!!</Link>
                    </div>
                </pre>
            </motion.div>
        </motion.section>
    );
}
  
export default Generic;