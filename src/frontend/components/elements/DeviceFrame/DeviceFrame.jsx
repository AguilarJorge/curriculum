import React from 'react';
import { motion } from 'framer-motion';

function DeviceFrame(props) {
    const {extraClass, thumbImg, frameImg, customAnim, variantsAnim} = props;
    return (
        <motion.div className={'thumb ' + extraClass} custom={customAnim} variants={variantsAnim}>
            <div className="thumbImg" style={{backgroundImage: `url(${thumbImg})`}}></div>
            <div className="frame" style={{backgroundImage: `url(${frameImg})`}} />
        </motion.div>
    )
}

export default DeviceFrame;