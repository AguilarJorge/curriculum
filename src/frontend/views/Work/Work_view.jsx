import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Work_view.css';
import DeviceFrame from '../../components/elements/DeviceFrame/DeviceFrame';
import ProgressBar from '../../components/elements/ProgressBar/ProgressBar';
import CircleButton from '../../components/elements/CircleButton/CircleButton';

function WorkView(props) {
    const {altura, timerSlider} = props;
    const [works, setWorks] = useState([]);
    const [current, setCurrent] = useState(null);
    const [pxSlider, setPxSlider] = useState(0);
    const [transformWrap, setTransformWrap] = useState(0);
    const refWrapper = useRef();
    const refThumbs = useRef();
    const thumbFrames = [
        {
            clase: 'laptop',
            thumbStr: 'laptop_thumb',
            frame: require('../../../resources/img/mockups/laptop.png'),
            customTime: '.7'
        },
        {
            clase: 'tablet',
            thumbStr: 'tablet_thumb',
            frame: require('../../../resources/img/mockups/tablet.png'),
            customTime: '.9'
        },
        {
            clase: 'phone',
            thumbStr: 'mobile_thumb',
            frame: require('../../../resources/img/mockups/phone.png'),
            customTime: '1.1'
        }
    ]

    const getData = async () => {
        const result = await fetch('/api/curriculum/v1/data/trabajos');
        const datos = await result.json();
        setWorks(datos);
        setCurrent(datos[0]);
    }
    
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
        setTransformWrap(`calc(50% - 45px)`);

    }, [works])

    useEffect(() => {
        let timer = setTimeout(() => {
            let updatePos = pxSlider === (works.length - 1) ? 0 : pxSlider + 1;
            animationSlider(updatePos);
        }, timerSlider)
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [works, current, pxSlider, timerSlider])
    
    const animationSlider = update => {
        refThumbs.current.classList.add('animTrans');
        setTimeout(() => {
            setPxSlider(update);
            setCurrent(works[update]);
            setTransformWrap(`calc(50% - 45px - (60px * ${update}))`);
            document.querySelector('.wrapper .wrk.active').classList.remove('active');
            let prev = document.querySelector('.wrapper .wrk.prev');
            if (prev) prev.classList.remove('prev');
            let next = document.querySelector('.wrapper .wrk.next');
            if (next) next.classList.remove('next');
            refWrapper.current.children[update].classList.add('active');                
            if (refWrapper.current.children[update].previousElementSibling) refWrapper.current.children[update].previousElementSibling.classList.add('prev');
            if (refWrapper.current.children[update].nextElementSibling) refWrapper.current.children[update].nextElementSibling.classList.add('next');
            refThumbs.current.classList.remove('animTrans');
        }, 500)
    }

    const updates = increment => {
        var update;
        if (increment === '+') {
            update = pxSlider === (works.length - 1) ? 0 : pxSlider + 1;
        } else {
            update = pxSlider === 0 ? works.length - 1 : pxSlider - 1;
        }
        animationSlider(update);
    }



    //Motion Anim
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

    return !current ? 'Cargando' : (
        <motion.section className="workSection" style={{minHeight: altura}} initial="init" animate="enter" exit="exit">
            <div className="container">
                <div className="thumbSide">
                    <div className="thumbs" ref={refThumbs}>
                        {
                            thumbFrames.map((device, k) => (
                                <DeviceFrame key={k} extraClass={device.clase} thumbImg={current[device.thumbStr]} frameImg={device.frame} customAnim={device.customTime} variantsAnim={animVariants.fromBottom} />
                            ))
                        }
                    </div>
                    <div className="controls">
                        <ProgressBar currentPos={pxSlider + 1} numTotal={works.length} duracion={timerSlider} />
                        <div className="controlButtons">
                            <CircleButton handleClick={() => updates('-')} modifierClass="workButton" icon={require('../../../resources/img/icons/chevronUp.svg')}/>
                            <CircleButton handleClick={() => updates('+')} modifierClass="workButton" icon={require('../../../resources/img/icons/chevronDown.svg')}/>
                        </div>
                    </div>
                </div>
                <motion.div className="workList" custom=".5" variants={animVariants.fromLeft}>
                    <ul className="wrapper" ref={refWrapper} style={{transform: `translateY(${transformWrap})`}}>
                        {
                            works.map((wk, k) => (
                                <li key={k} className={`wrk${(works && k === 0) ? ' active':''}`}>
                                    <div className="wrkName">
                                        <span className="num">{k < 9 ? `0${k + 1}` : k + 1}</span>
                                        {wk.nombre}</div>
                                </li>
                            ))
                        }
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
}
  
export default WorkView;