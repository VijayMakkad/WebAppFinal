import React, {useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

import './Card.css'
export default function Card({ heading, subtext, img, id, svg, svgid }) {

    return (
        <>
            <div className="card" id={id}>
                <div className="d-flex flex-row justify-content-between align-items-center h-100">
                    <div className="text d-flex flex-md-column col-xl-6 h-100 justify-content-center align-items-start">
                        <div className="heading mt-1">
                            {heading}
                        </div>
                        <div className="subtext">
                            {subtext}
                        </div>
                    </div>
                    <div className="image d-none d-xl-flex col-xl-6">
                        <div className='inner'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="svg-animation" id={svgid}>
                <div className="d-none d-md-flex">
                    {svg}
                </div>
            </div>
        </>
  )
}
