import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './Slide.css'

function Slide() {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="App">
            <button onClick={scrollToSection} className='btn'>Scroll to Section</button>
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p>Scroll down to see the section</p>
            </div>
            <motion.div
                ref={sectionRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f0f0'
                }}
            >
                <h2>This is the target section</h2>
            </motion.div>
        </div>
    )
}

export default Slide
