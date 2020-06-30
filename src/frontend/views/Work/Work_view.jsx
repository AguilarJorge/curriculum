import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Work_view.css';

function WorkView(props) {
    const {altura, timerSlider} = props;
    const [works, setWorks] = useState([]);
    const [current, setCurrent] = useState(null);
    const [pxSlider, setPxSlider] = useState(0);
    const refContainer = useRef();
    
    useEffect(() => {
        let workStorage = sessionStorage.getItem('works');
        if (workStorage != null) {
            setWorks(JSON.parse(workStorage))
            setCurrent(JSON.parse(workStorage)[0])
        }else {
            getData()
        }
    }, [])
    useEffect(() => {
        sessionStorage.setItem('works', JSON.stringify(works))
    }, [works])
    useEffect(() => {
        let timer = setTimeout(() => {
            if (refContainer.current) refContainer.current.classList.add('oc');
            setTimeout(() => {
                if (refContainer.current) refContainer.current.classList.remove('oc');
                let update = pxSlider === (works.length - 1) ? 0 : pxSlider + 1;
                setPxSlider(update);
                setCurrent(works[update]);
            }, 500)
        }, timerSlider)
        return () => clearTimeout(timer);
    }, [works, current, pxSlider, timerSlider])

    const getData = async () => {
        const result = await fetch('/api/curriculum/v1/data/trabajos');
        const datos = await result.json();
        setWorks(datos);
        setCurrent(datos[0]);
    }

    //Motion Anim
    const animVariants = {
        fromRight: {
            init: {
                y: 0,
                x: '100px',
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
                y: '-50%',
                opacity: 0
            }
        },
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
        }
    };

    return !current ? 'Cargando' : (
        <motion.section className="workSection" style={{minHeight: altura}} initial="init" animate="enter" exit="exit">
            <div className="container" ref={refContainer}>
                <div className="workInfo">
                    <motion.div className="tag isClickable" custom={.9} variants={animVariants.scale}>{current.categoria}</motion.div>
                    <motion.h1 className="name" custom={.5} variants={animVariants.fromRight}>{current.nombre}</motion.h1>
                    <motion.p className="desc" custom={.7} variants={animVariants.fromRight}>{current.descripcion}</motion.p>
                    <div className="buttons">
                        <motion.div className="button info isClickable" custom={1.1} variants={animVariants.fromLeft}>Ver detalles</motion.div>
                        {current.url && <motion.a className="button link isExternaLink" custom={1.3} variants={animVariants.fromLeft} href={current.url} target="_blank" rel="noopener noreferrer">Visitar sitio</motion.a>}
                    </div>
                </div>
                <div className="thumbs">
                    <motion.div className="thumb laptop" custom={1.5} variants={animVariants.fromBottom}>
                        <div className="thumbImg" style={{backgroundImage: `url(${current.laptop_thumb})`}}></div>
                        <div className="frame" style={{backgroundImage: `url(${require('../../../resources/img/mockups/laptop.png')})`}} />
                    </motion.div>
                    <motion.div className="thumb tablet" custom={1.7} variants={animVariants.fromBottom}>
                        <div className="thumbImg" style={{backgroundImage: `url(${current.tablet_thumb})`}}></div>
                        <div className="frame" style={{backgroundImage: `url(${require('../../../resources/img/mockups/tablet.png')})`}} />
                    </motion.div>
                    <motion.div className="thumb phone" custom={1.9} variants={animVariants.fromBottom}>
                        <div className="thumbImg" style={{backgroundImage: `url(${current.mobile_thumb})`}}></div>
                        <div className="frame" style={{backgroundImage: `url(${require('../../../resources/img/mockups/phone.png')})`}} />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
  
export default WorkView;