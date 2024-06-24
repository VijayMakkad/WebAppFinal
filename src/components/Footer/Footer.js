import React from 'react'
import { ReactComponent as Facebook } from 'remixicon/icons/Logos/facebook-fill.svg';
import { ReactComponent as Instagram } from 'remixicon/icons/Logos/instagram-line.svg';
import { ReactComponent as Twitter } from 'remixicon/icons/Logos/twitter-fill.svg';
import { ReactComponent as Linkedin } from 'remixicon/icons/Logos/linkedin-fill.svg';

import './Footer.css'
export default function Footer() {
  return (
    <div id="footer" style={{clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)'}}>
        <div id="fixed-footer-area">
            <div className="footer-divider mt-2 mb-2"></div>
            <div className="d-flex flex-row justify-content-between align-items-center h-100">
                <div className="d-flex col-12 col-md-7 flex-column gap-3 h-100 justify-content-center align-items-center align-items-md-start">
                    <div className="d-flex flex-row gap-5">
                        <h3>CONTACT US</h3>
                        <h3>TERMS OF SERVICE</h3>
                        <h3>RETURNS AND SHIPPING</h3>
                    </div>
                    <div className='mt-4 gap-3 w-100 align-self-start d-flex flex-row justify-content-between justify-content-md-start align-items-center'>
                        <h3 style={{margin:0}}>Privacy Policy</h3>
                        <div className="socials-footer d-flex d-md-none flex-row gap-3"> 
                            <Linkedin fill='white' style={{ width: '1.2em', height: '1.2em', verticalAlign: 'middle' }} />                          
                            <Facebook fill='white' style={{ width: '1.2em', height: '1.2em', verticalAlign: 'middle' }} />                       
                            <Instagram fill='white' style={{ width: '1.2em', height: '1.2em', verticalAlign: 'middle' }} />
                            <Twitter fill='white' style={{ width: '1.2em', height: '1.2em', verticalAlign: 'middle' }} />                           
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-flex flex-md-column gap-3 col-md-5 h-100 justify-content-center align-items-end">
                    <div className="follow-our-socials">
                        <h3>Follow Our Socials</h3>
                    </div>
                    <div className="socials-footer d-none d-md-flex flex-row gap-3">                           
                        <Linkedin fill='white' style={{ width: '1.5em', height: '1.5em', verticalAlign: 'middle' }} />                       
                        <Facebook fill='white' style={{ width: '1.5em', height: '1.5em', verticalAlign: 'middle' }} />                       
                        <Instagram fill='white' style={{ width: '1.5em', height: '1.5em', verticalAlign: 'middle' }} />
                        <Twitter fill='white' style={{ width: '1.5em', height: '1.5em', verticalAlign: 'middle' }} />                           
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
