import React, { useEffect, useState } from 'react'


import { ReactComponent as ArrowRightUp } from 'remixicon/icons/Arrows/arrow-right-up-line.svg';
import { ReactComponent as ArrowRight} from 'remixicon/icons/Arrows/arrow-right-line.svg';
import { ReactComponent as Close } from 'remixicon/icons/System/close-line.svg';
import { ReactComponent as Menu } from 'remixicon/icons/System/menu-4-fill.svg';

import './Navbar.css';
import '../Login/Login'
import Login from '../Login/Login';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [login, setLogin] = useState(false);

    useEffect(() => {
    const navMenu = document.getElementById('menu');
    const navToggle = document.getElementById('toggle');
    const navClose = document.getElementById('close');
    

    if (navToggle) {
        navToggle.addEventListener('click', () => {
        setClick(!click);
        navMenu.classList.add('show-menu');
      });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
          setClick(!click);
        navMenu.classList.remove('show-menu');
      });
    }

    // Clean up event listeners on component unmount
    return () => {
      if (navToggle) {
        navToggle.removeEventListener('click', () => {
          navMenu.classList.add('show-menu');
        });
      }

      if (navClose) {
        navClose.removeEventListener('click', () => {
          navMenu.classList.remove('show-menu');
        });
      }
    };
    }, [click]);

    return (
        <>
            <header className="header" id="header">
                <nav className="navcontainer">
                    <div className="logo">
                        <a href="" style={{height:'50px'}}>
                            <img src="images/common/logo.png" alt="" width={50} height={50} />
                        </a>
                        <a href="" style={{height:'30px'}}>
                            <img src="images/common/branding.png" alt="" height={30} />
                        </a>
                    </div>
                    
                    <div className="menu" id="menu">
                        <ul className="list">
                            <li className="item">
                                <a href="" className="link">
                                    <ArrowRightUp style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />
                                    
                                    <span>About Us</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="" className="link">
                                    <ArrowRightUp style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />
                                    
                                    <span>Shop</span>
                                </a>
                            </li>
                            <li className="item">
                                <a href="" className="link">
                                    <ArrowRightUp style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />
                                    
                                    <span>Contact Us</span>                            
                                </a>
                            </li>
                            <li className="item login" id='loginbutton'>
                                <a className="link" onClick={() => {
                                    setLogin(true)
                                }}>Login</a>
                                <div className="circle">
                                    <ArrowRight style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />
                                </div>
                            </li>
                            <li className="item">
                                <div className="close" id='close'>
                                    <Close style={{ width: '2em', height: '2em', cursor:'pointer'}} />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="toggle" id="toggle">
                        <Menu style={{ width: '2em', height: '2em',cursor:'pointer' }} />
                    </div>
                </nav>
            </header>
            <Login show={login} onHide={() => {
                setLogin(false)
            }} />
        </>
    );
}

export default Navbar;