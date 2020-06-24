import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Work_view.css';

function WorkView(props) {
    const {altura} = props;
    const [works, setWorks] = useState([]);
    const [current, setCurrent] = useState(null);
    
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

    const getData = async () => {
        const result = await fetch('/api/curriculum/v1/data/trabajos');
        const datos = await result.json();
        setWorks(datos);
        setCurrent(datos[0]);
    }


    return !current ? 'Cargando' : (
        <motion.section className="workSection" style={{minHeight: altura}}
            initial="exit"
            animate="enter"
            exit="exit"
            variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
            <div className="container">
                <div className="workInfo">
                    <h1 className="name">{current.nombre}</h1>
                    <p className="desc">{current.descripcion}</p>
                </div>
                <div className="thumbs">
                    <div className="thumb laptop">
                        <div className="thumbImg" style={{backgroundImage: `url(${current.laptop_thumb})`}}></div>
                        <div className="frame" style={{backgroundImage: `url(${require('../../../resources/img/mockups/laptop.png')})`}} />
                    </div>
                    <div className="thumb tablet">
                        <div className="thumbImg" style={{backgroundImage: `url(${current.tablet_thumb})`}}></div>
                        <div className="frame" style={{backgroundImage: `url(${require('../../../resources/img/mockups/tablet.png')})`}} />
                    </div>
                    <div className="thumb phone">
                        <div className="thumbImg" style={{backgroundImage: `url(${current.mobile_thumb})`}}></div>
                        <div className="frame" style={{backgroundImage: `url(${require('../../../resources/img/mockups/phone.png')})`}} />
                    </div>
                </div>
            </div>
        </motion.section>
    );
  }
  
  export default WorkView;