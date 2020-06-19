import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
require('dotenv').config();

function WorkView() {
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData(){
            const result = await fetch('/api/curriculum/v1/data/trabajos');
            const datos = await result.json();
            setData(datos);
        }
        getData();        
    }, [])
    

    return (
        <motion.section
            initial="exit"
            animate="enter"
            exit="exit"
            variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
            <h2>{JSON.stringify(data)}</h2>
        </motion.section>
    );
  }
  
  export default WorkView;