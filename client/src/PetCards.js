import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Header from './Header.js';
import images from './PetImages.js';

const PetCards = () => {

    const [width, setWidth] = useState(0);
    const carroussel = useRef();

    useEffect(() => {
        setWidth(carroussel.current.scrollWidth - carroussel.current.offsetWidth);
    }, []);

    return (
        
        <motion.div ref={carroussel} className="carroussel" whileTap={"grabbing"}>
            <Header />
            <h1 className="titlepets">Pets Looking for Love</h1>
            <motion.div 
                drag="x" 
                dragConstraints={{ right: 0, left: -width}}
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