import React,{useEffect} from 'react'
import { motion, useScroll, useTransform} from 'framer-motion';
import { ReactComponent as StarFilled } from 'remixicon/icons/System/star-fill.svg';
import { ReactComponent as StarHalfFilled } from 'remixicon/icons/System/star-half-fill.svg';
import { ReactComponent as Facebook } from 'remixicon/icons/Logos/facebook-fill.svg';
import { ReactComponent as Instagram } from 'remixicon/icons/Logos/instagram-line.svg';
import { ReactComponent as Twitter } from 'remixicon/icons/Logos/twitter-fill.svg';
import { ReactComponent as Apple } from 'remixicon/icons/Logos/apple-fill.svg';
import { ReactComponent as Playstore } from 'remixicon/icons/Logos/google-play-fill.svg';
import Lottie  from 'lottie-react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


import './Landing.css'
import saveAnimation from '../../animjsons/save2animation.json'
import investAnimation from '../../animjsons/investanimation.json'
import withdrawAnimation from '../../animjsons/withdrawAnimation.json'



import MainBg from '../Background/MainBg'
import Navbar from '../../components/Navbar/Navbar'
import CardLanding from './Components/CardLanding/CardLanding';
import Calculator from './Components/Calculator/Calculator';
import Heading from '../../components/Text/Heading/Heading';
import Normal from '../../components/Text/Normal/Normal'
import Footer from '../../components/Footer/Footer';


export default function Landing() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const charvariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 }
  }

  const pathVariants = {
    hidden:{pathLength:0},
    reveal:{pathLength:1,transition:{ duration: 2, ease: 'easeInOut' }}
  }

  const { scrollYProgress } = useScroll({
    container: '#three',
  });

  const pathDiscrete = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.9, 1], [0, 0.3, 0.6, 0.9, 1]);

  // const data = [{
  //   heading: 'Save as Digital Gold',
  //   subtext: 'Easygold is a digital gold investment platform. Nice to meet you.',
  //   img: '/images/common/background.png',
  //   svg: (<motion.svg variants={charvariants} initial='hidden' whileInView='reveal' transition={{ duration: 0.5, ease: 'easeInOut' }} stroke='#FAB400' fill='none' strokeWidth={1} width="300px" height="300px" viewBox="0 0 24 24">
  //           <motion.path variants={pathVariants} d=" M19.279,16l1.333,4H13.388l1.333-4ZM9.721,10h4.558l1.333,4H8.388Zm-5,6H9.279l1.333,4H3.388ZM12,6a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V5A1,1,0,0,1,12,6Zm7.071-1.071a1,1,0,0,1,0,1.414L17.657,7.757a1,1,0,0,1-1.414-1.414l1.414-1.414A1,1,0,0,1,19.071,4.929ZM6.343,7.757,4.929,6.343A1,1,0,0,1,6.343,4.929L7.757,6.343A1,1,0,1,1,6.343,7.757ZM3,11H5a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Zm16,0h2a1,1,0,0,1,0,2H19a1,1,0,0,1,0-2Z" />
  //         </motion.svg>)
  // }, {
  //   heading: 'Monthly and Daily Micro Investments',
  //   subtext: 'Easygold is a digital gold investment platform. Nice to meet you.',
  //   img: '/images/common/background.png',
  //   svg: (
  //     <motion.svg variants={charvariants} initial='hidden' whileInView='reveal' transition={{ duration: 0.5, ease: 'easeInOut' }} fill='#FAB400' stroke='#FAB400' height="300px" width="300px" version="1.1" id="Layer_1" viewBox="0 0 195.453 195.453">
  //       <g>
  //         <g>
  //           <g>
  //             <motion.path variants={pathVariants} d="M155.92,91.215H96.331c1.958-7.435,8.952-28.964,26.408-39.574c1.639-0.998,2.162-3.135,1.164-4.774
  //               c-0.998-1.635-3.132-2.162-4.774-1.164C97.667,58.748,90.561,85.076,89.161,91.215H34.31c-1.92,0-3.475,1.554-3.475,3.475v24.322
  //               c0,1.92,1.554,3.475,3.475,3.475h7.245l6.219,69.8c0.159,1.791,1.663,3.166,3.461,3.166h87.76c1.798,0,3.302-1.374,3.461-3.166
  //               l6.219-69.8h7.245c1.92,0,3.475-1.554,3.475-3.475V94.689C159.394,92.768,157.841,91.215,155.92,91.215z M135.816,188.503H54.414
  //               l-5.884-66.017H141.7L135.816,188.503z M152.445,115.537h-6.949H44.734h-6.949V98.164h114.661V115.537z"/>
  //             <motion.path variants={pathVariants} d="M81.501,64.517c2.141,0.672,4.204,1.005,6.142,1.005c3.468,0,6.532-1.065,8.934-3.152
  //               c3.746-3.257,5.246-8.452,4.224-14.628c-0.923-5.568-3.838-11.404-8.211-16.436c-9.236-10.627-27.451-9.182-28.231-9.107
  //               c-1.5,0.129-2.745,1.215-3.084,2.681c-0.173,0.757-4.147,18.595,5.093,29.222C70.742,59.129,76.117,62.831,81.501,64.517z
  //               M67.614,29.052c4.723,0.041,14.577,0.879,19.731,6.813c3.492,4.014,5.897,8.754,6.6,13.009c0.356,2.145,0.577,6.07-1.927,8.249
  //               c-2.504,2.178-6.362,1.408-8.439,0.763c-4.116-1.289-8.476-4.333-11.964-8.347C66.456,43.609,66.992,33.738,67.614,29.052z"/>
  //             <motion.path variants={pathVariants} d="M148.982,31.271c-4.791,0-8.686-3.895-8.686-8.686c0-4.791,3.895-8.686,8.686-8.686s8.686,3.895,8.686,8.686
  //               c0,1.92,1.554,3.475,3.475,3.475s3.475-1.554,3.475-3.475c0-8.027-6.102-14.583-13.898-15.46v-3.65
  //               c0-1.92-1.554-3.475-3.475-3.475c-1.92,0-3.475,1.554-3.475,3.475V7.91c-6.053,2.158-10.424,7.889-10.424,14.675
  //               c0,8.622,7.014,15.636,15.636,15.636c4.791,0,8.686,3.895,8.686,8.686c0,4.791-3.895,8.686-8.686,8.686s-8.686-3.895-8.686-8.686
  //               c0-1.92-1.554-3.475-3.475-3.475s-3.475,1.554-3.475,3.475c0,6.785,4.37,12.517,10.424,14.675v5.874
  //               c0,1.92,1.554,3.475,3.475,3.475c1.92,0,3.475-1.554,3.475-3.475v-5.089c7.796-0.877,13.898-7.433,13.898-15.46
  //               C164.617,38.285,157.604,31.271,148.982,31.271z"/>
  //           </g>
  //         </g>
  //       </g>
  //       </motion.svg>)
  // }, {
  //   heading: 'Buy BIS Hall-Marked Jewellery',
  //   subtext: 'Easygold is a digital gold investment platform. Nice to meet you.',
  //   img: '/images/common/background.png',
  //   svg: (
  //     <motion.svg variants={charvariants} initial='hidden' whileInView='reveal' transition={{ duration: 0.5, ease: 'easeInOut' }} fill='none' stroke='#FAB400' strokeWidth={10} height="300px" width="300px" viewBox="0 0 576 512"><motion.path variants={pathVariants} d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></motion.svg>
  //   )
  // }, {
  //   heading: 'Withdraw anytime, as Cash or as Gold',
  //   subtext: 'Easygold is a digital gold investment platform. Nice to meet you.',
  //   img: '/images/common/background.png',
  //   svg:(<motion.svg variants={charvariants} initial='hidden' whileInView='reveal' transition={{ duration: 0.5, ease: 'easeInOut' }} fill='none' stroke='#FAB400' strokeWidth={10} height="300px" width="300px" viewBox="0 0 640 512"><motion.path variants={pathVariants} d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64H337.9c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5V384c0 35.3-28.7 64-64 64H302.1c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5V128c0-35.3 28.7-64 64-64zm64 64H96v64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64h64V320zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></motion.svg>)
  //   }];
  
  const data = [{
    heading: 'Save as Digital Gold',
    subtext: 'Easygold is a digital gold investment platform. Nice to meet you.',
    img: '/images/common/background.png',
    svg: (<Lottie animationData={saveAnimation} options={{ loop: true, autoplay: true }} style={{height:'300px', width:'300px'}}/>)
  }, {
    heading: 'Monthly and Daily Micro Investments',
    subtext: 'Easygold is a digital gold investment platform. Nice to meet you.',
    img: '/images/common/background.png',
    svg: (<Lottie animationData={investAnimation} options={{ loop: true, autoplay: true }} style={{height:'300px', width:'300px'}}/>)
  }, {
    heading: 'Buy BIS Hall-Marked Jewellery',
    subtext: 'Easygold is a digital gold investment platform. Nice to meet you.',
    img: '/images/common/background.png',
    svg: (<Lottie animationData={investAnimation} options={{ loop: true, autoplay: true }} style={{height:'300px', width:'300px'}}/>)
  }, {
    heading: 'Withdraw anytime, as Cash or as Gold',
    subtext: 'Easygold is a digital gold investment platform. Nice to meet you.',
    img: '/images/common/background.png',
    svg: (<Lottie animationData={withdrawAnimation} options={{ loop: true, autoplay: true }} style={{height:'300px', width:'300px'}}/>)
    }];
  useGSAP(() => {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#two',
        start: '-5% 0',
        end: '100% 0',
        pin: true,
        scrub: 2,
      }
    })

    if (window.innerWidth > 800) {
      timeline
        .addLabel('card-1-display')
        .to('#card-1,#svg-1', { display: 'flex' })
        .to('#card-1,#svg-1', { display: 'none' })
        .addLabel('card-2-display')
        .to('#card-2,#svg-2', { display: 'flex' })
        .to('#card-2,#svg-2', { display: 'none' })
        .addLabel('card-3-display')
        .to('#card-3,#svg-3', { display: 'flex' })
        .to('#card-3,#svg-3', { display: 'none' })
        .addLabel('card-4-display')
        .to('#card-4,#svg-4', { display: 'flex' })
    }

    else {
      timeline
      .addLabel('card-1-display')
      .to('#card-1', { display: 'flex' })
      .to('#card-1', { display: 'none' })
      .addLabel('card-2-display')
      .to('#card-2', { display: 'flex' })
      .to('#card-2', { display: 'none' })
      .addLabel('card-3-display')
      .to('#card-3', { display: 'flex' })
      .to('#card-3', { display: 'none' })
      .addLabel('card-4-display')
      .to('#card-4', { display: 'flex' })
    }

  })
  useGSAP(() => {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#three',
        markers:true,
        start: '0 0',
        end: '150% -30%',
        pin:true,
        scrub: 2,
      }
    })

    timeline
      .addLabel('year20')
      .to('.year20', { width: '100%', color: 'white' })
      .addLabel('year21')
      .to('.year21', { width: '100%', color: 'white' })
      .addLabel('year22')
      .to('.year22', { width: '100%', color: 'white' })
      .addLabel('year23')
      .to('.year23', { width: '100%', color: 'white' })
      .addLabel('current')
      .to('.current', { width: '100%', color: '#FAB400' })
        
  })

  return (
      <>
          <MainBg>
            <Navbar/>
            <div className="landing">
              <section id='one'className='p-5'>
                <div className="landingrow d-flex flex-column justify-content-start flex-md-row pt-5">
                  <div className="d-flex flex-column col-12 align-items-center justify-content-start col-md-6 align-items-md-start justify-content-md-center">
                    <div className="heading d-flex flex-column justify-content-center align-items-center align-items-md-start justify-content-md-center" >
                      <Heading id='onestop' style={{fontSize:'3.7vw'}} text="One Stop Shop" duration={0.5}/>
                      <Heading id='india' style={{fontSize:'3.7vw'}} text="For Indias Gold Need" duration={1.5}/>                      
                    </div>
                    <div className="subheading w-100 d-flex flex-column align-items-center justify-content-center mt-3">
                      <div style={{color:'#EBC982'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. alley of type and scrambled it to make a type specimen book.</div>
                      <div id="buttons" className='d-flex w-100 flex-row justify-content-center justify-content-md-start align-items-center' style={{margin:'30px 0'}}>
                        <button id="getstarted">
                          Get Started
                        </button>
                        <div id="rating" style={{margin:'0 0 0 20px'}}>
                          <div className="stars">
                            <StarFilled fill='#EBC982' style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />
                            <StarFilled fill='#EBC982' style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />
                            <StarFilled fill='#EBC982' style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />
                            <StarFilled fill='#EBC982' style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />
                            <StarHalfFilled fill='#EBC982' style={{ width: '1em', height: '1em', verticalAlign: 'middle' }} />
                          </div>
                          <div className="ratingtext" style={{fontSize:'12px'}}>
                            from 120000 reviews
                          </div>
                        </div>
                      </div>                        
                    </div>   
                  </div>
                  <div className="d-flex flex-column align-items-center col-12 col-md-6" style={{flexGrow:1}} >
                    <Calculator/>
                  </div> 
                </div>
              </section>
              <section id="two">
                <div className="text-row">
                      <Heading text="Ideology" duration={0.5}/>
                </div>
                <div className="cards">
                  {data.map((item, index) => (<CardLanding {...item} key={index} id={`card-${index+1}`} svgid={`svg-${index+1}`} />))}
                </div>
              </section>
              <section id="three">
                <div className="d-flex flex-column justify-content-evenly row-gap-3 align-items-center" style={{height:'100vh'}}>                  
                  <div className="text-row d-flex flex-row col-sm-12 justify-content-center" >
                          <Heading text="Why Gold" duration={0.5}/>
                  </div>
                  <div className="w-100 h-100 d-flex flex-column-reverse flex-md-row">
                    <div className="d-flex flex-column col-md-5 align-items-start justify-content-center h-100">
                      <div>                        
                        <Heading text="Here's a Key Reason to Invest in Gold" duration={0.5}/>
                      </div>
                      <div className='d-flex flex-column justify-content-center align-items-start mt-5'>
                        <h4 className='subtext'>Here are some subpoints on why to invest in gold</h4>
                        <h4 className='subtext'>Here are some subpoints on why to invest in gold</h4>
                        <h4 className='subtext'>Here are some subpoints on why to invest in gold</h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-evenly col-md-7 h-100">
                      <div className="col-2 d-flex flex-column justify-content-evenly align-items-center years">
                        <div><h2 data-text='2024' className='current'>2024</h2></div>
                        <div><h2 data-text='2023' className='year year23'>2023</h2></div>
                        <div><h2 data-text='2022' className='year year22'>2022</h2></div>
                        <div><h2 data-text='2021' className='year year21'>2021</h2></div>
                        <div><h2 data-text='2020' className='year year20'>2020</h2></div>
                      </div>
                      <div className="col-8" >
                        <svg width="100%" height="100%" viewBox="2500 2020 7500 8000">
                          <motion.path d='M4573.7,9500 L4640.1,7750 L5019.6,6000 L5778.3,4250 L7086.4,2700'
                            stroke="white"  
                            fill="none"
                            strokeWidth={20}
                            style={{pathLength:pathDiscrete}}
                             />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="four">
                
              </section>              
              <section id="five">
                <div className="d-flex flex-row justify-content-between align-items-center h-100">
                  <div className="d-none d-md-flex col-md-7 flex-column justify-content-center align-items-start align-items-md-center h-100" id='ending-left' >
                    <div id="easygoldby" className='d-none d-md-flex flex-column'>
                      <Normal text='Easygold' duration={0.5} style={{fontWeight:'500'}} />
                      <Normal text='by Zlato Technologies' duration={1.5} style={{fontSize:'15px'}}/>
                    </div>
                    <div className="main-text-five-landing d-flex flex-column">
                      <div className="heading-no-making-charges d-flex flex-column">  
                        <Heading text='Shop at no' duration={0.5}/>
                        <Heading text='making charges' duration={0.5} />
                      </div>
                      <div className="subtext-no-making-charges w-75">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. alley of type and scrambled it to make a type specimen book.</p>
                      </div>
                      <div className="open-appstore d-flex flex-row justify-content-start align-items-center mt-4 mb-4">
                        <div className="appstore-card d-flex flex-row justify-content-between align-items-center p-3">
                          <div className="appstore-card-icon col-3 d-flex justify-content-center align-items-center">
                            <Apple fill='#EBC982' style={{ width: '2.5em', height: '2.5em', verticalAlign: 'middle' }} />
                          </div>
                          <div className="appstore-card-text col-9 d-flex flex-column justify-content-center align-items-start">
                            <p>Get it on</p>
                            <h2> Appstore </h2>
                          </div>
                        </div>
                        <div className="appstore-card d-flex flex-row justify-content-between align-items-center p-3">
                          <div className="appstore-card-icon col-3 d-flex justify-content-center align-items-center">
                            <Playstore fill='#EBC982' style={{ width: '2.5em', height: '2.5em', verticalAlign: 'middle' }} />
                          </div>
                          <div className="appstore-card-text col-9 d-flex flex-column justify-content-center align-items-start">
                            <p>Get it on</p>
                            <h2> Playstore </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="socials-landing d-flex flex-row align-self-start">
                      <div className="social-icons-landing">
                        <Facebook fill='white' style={{ width: '1.2em', height: '1.2em', verticalAlign: 'middle' }} />
                      </div>
                      <div className="social-icons-landing">
                        <Instagram fill='white' style={{ width: '1.2em', height: '1.2em', verticalAlign: 'middle' }} />
                      </div>
                      <div className="social-icons-landing">
                        <Twitter fill='white' style={{ width: '1.2em', height: '1.2em', verticalAlign: 'middle' }} />
                      </div>
                    </div>
                  </div>
                  <div className="d-none d-md-flex col-md-5 flex-column justify-content-center align-items-start h-100" style={{marginLeft:'100px'}}>
                    <img src="/images/common/iphone15pro.png" alt="" style={{height:'80%', width:'auto'}} />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center d-md-none h-100">
                    <div className="main-text-five-landing d-flex flex-column h-100" >
                      <div className="heading-no-making-charges">  
                        <Heading text='Shop at no Making Charges' duration={0.5} style={{marginRight:'5px', fontSize:'2em', textAlign:'center'}} />
                      </div>
                      <div className="subtext-no-making-charges w-100 text-center">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. alley of type and scrambled it to make a type specimen book.</p>
                      </div>
                      <div className="d-flex d-md-none justify-content-center align-items-center" style={{flexGrow:1}}>
                        <img src="/images/common/iphone15pro.png" alt="" style={{height:'300px', width:'auto'}} />
                      </div>
                      <div className="open-appstore d-flex flex-row justify-content-center align-items-center mt-4 mb-4">
                        <div className="appstore-card d-flex flex-row justify-content-between align-items-center p-3">
                          <div className="appstore-card-icon col-3 d-flex justify-content-center align-items-center">
                            <Apple fill='#EBC982' style={{ width: '2.5em', height: '2.5em', verticalAlign: 'middle' }} />
                          </div>
                          <div className="appstore-card-text col-9 d-flex flex-column justify-content-center align-items-start">
                            <p>Get it on</p>
                            <h2> Appstore </h2>
                          </div>
                        </div>
                        <div className="appstore-card d-flex flex-row justify-content-between align-items-center p-3">
                          <div className="appstore-card-icon col-3 d-flex justify-content-center align-items-center">
                            <Playstore fill='#EBC982' style={{ width: '2.5em', height: '2.5em', verticalAlign: 'middle' }} />
                          </div>
                          <div className="appstore-card-text col-9 d-flex flex-column justify-content-center align-items-start">
                            <p>Get it on</p>
                            <h2> Playstore </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Footer/>
            </div>
          </MainBg>
      </> 
  )
}
