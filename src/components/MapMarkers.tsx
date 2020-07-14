import React from 'react';
import { Marker } from 'react-map-gl';
import { motion } from 'framer-motion';


const ICON = "M 17 0 c -9 0 -16 7 -16 16 c 0 9 16 30 16 30 s 16 -21 16 -30 c 0 -9 -7 -16 -16 -16 z m 0 21 c -3 0 -5 -2 -5 -5 s 2 -5 5 -5 s 5 2 5 5 s -2 5 -5 5 z"

function ExtraInformation() {
    return (
        <div>
            <span color="black">Hello World</span>
        </div>
    );
}

function Pin() {
    const size = 30;
    return (
        <motion.div whileHover={{scale: 1.2, rotateY: '180deg'}} whileTap={{scale: 0.9}} style={{transform: `translate(${-size / 2}, ${-size}px)`}}>
            <svg height={size} viewBox="0 0 32 48" style={{cursor: 'pointer', fill: 'rgba(131, 255, 51, 0.7)', stroke: 'none'}}>
                <path d={ICON}/>
            </svg>
        </motion.div>
    );
}

function Markers(props: {data: [number, number, string][]}) {
    const { data } = props;
    return <>{data.map(el => (
        <Marker key={el[2] + el[0] + el[1]} longitude={el[0]} latitude={el[1]}>
            <Pin/>
        </Marker>
    ))}</>;
};

export default Markers;