import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
require('dotenv').config();

function WorkView() {
    const [data, setData] = useState({});

    console.log(`${process.env.API_URL}/trabajos`);
    const getData = async () => {
        const result = await fetch(`${process.env.API_URL}/trabajos`);
        const datos = await result.json();
        
        setData(datos);
    }

    useEffect(() => {
        // getData();
    }, [])
    // console.log(data);

    return (
        <motion.section
            initial="exit"
            animate="enter"
            exit="exit"
            variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
            <h2>Work</h2>
        </motion.section>
    );
  }
  
  export default WorkView;