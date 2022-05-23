import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Header from './Header.js';
import images from './PetImages.js';

const PetCards = () => {


    return (
        
        <motion.div className="carroussel">
            <Header />
            <h1 className="titlepets">Pets Looking for Love</h1>
            <motion.div 
                drag="x" 
                dragConstraints={{ right: 0, left: 30}}
                className="inner-carroussel"
            >
                {images.map((image) => {
                    return(
                        <motion.div className="item" key={image}>
                            <img src={image} alt="" />
                        </motion.div>   
                    );
                })}
            </motion.div>
        </motion.div>
    )
}

export default PetCards;