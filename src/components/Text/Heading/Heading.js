import React from 'react'
import { motion, variants} from 'framer-motion';

import './Heading.css'
import splitter from '../../../utils/splitletters';

export default function Heading({ text, duration, style }) {
    const heading = splitter(text)
    const charvariants = {
        hidden: { opacity: 0 },
        reveal: { opacity: 1 }
    }

    return (
        <motion.h1 style={style} className='headingComponent' initial='hidden' whileInView='reveal' transition={{ staggerChildren: .02 }}>
            {heading.map(char => (
                        <motion.span
                            transition={{ duration: duration, ease: 'easeOut' }}
                            variants={charvariants}
                        >
                            {char}
                        </motion.span>
                        )
        )}</motion.h1>
    )
}
