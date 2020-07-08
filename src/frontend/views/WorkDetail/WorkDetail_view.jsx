import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import './WorkDetail_view.css';
import MasonryGallery from '../../components/elements/MasonryGallery/MasonryGallery';

function WorkDetailView(props) {
    const {altura} = props;
    const {id} = useParams();
    const [currentWork, setCurrentWork] = useState({});
    
    const getWork = async id => {
        const result = await fetch(`/api/curriculum/v1/data/trabajos/${id}`);
        const work = await result.json();        
        setCurrentWork(work);
    }
    useEffect(() => {
        let work = sessionStorage.getItem('currentWork');
        work = JSON.parse(work);
        (work != null && work.id === parseInt(id)) ? setCurrentWork(work) : getWork(id);
    }, [id])
    useEffect(() => {
        sessionStorage.setItem('currentWork', JSON.stringify(currentWork))
    }, [currentWork])


    const [imgs, setImgs] = useState(null);
    useEffect(() => {
        const getImgs = async () => {
            const result = await fetch('https://picsum.photos/v2/list');
            const data = await result.json();        
            setImgs(data);
        }
        getImgs();
    }, [])

    return !currentWork ? 'cargando' : (
        <motion.section className="workDetailSection" initial="init" animate="enter" exit="exit">
            <div className="container" style={{minHeight: altura}}>
                <h1 className="title">{currentWork.nombre}</h1>
                <div className="contentWrap">
                    <div className="infoSide">
                        <div className="info">
                            <p className="decoInf empresa">{currentWork.empresa}</p>
                            <p className="decoInf categoria">{currentWork.categoria}</p>
                            <div className="descripcion">
                                <p>{currentWork.descripcion}</p>
                            </div>
                            <MasonryGallery images={imgs} maxRows="4" imgSpace="5px" alterClass="masonryGal"/>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="speaker"></div>
                        <div className="screen">
                            <img className="webPage" src={currentWork.mobile_thumb} alt={currentWork.nombre}/>
                        </div>
                        <div className="home"></div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
  
export default  WorkDetailView;