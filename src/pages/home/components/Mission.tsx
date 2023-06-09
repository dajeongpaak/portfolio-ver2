import { useLayoutEffect, useRef, useEffect } from 'react';

import styles from './Mission.module.scss'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function Mission() {
  const bgAnimation: any = useRef()

  useLayoutEffect(() => {
  
    let ctx = gsap.context(() => {
      gsap.to("#js-animation", {
        width: "200vw",
        height: "120vh",
        scrollTrigger: {
          trigger: bgAnimation.current,
          start: "40% center",
          scrub: 1,
        }     
      }); 
    }, bgAnimation)
  
    return () => ctx.revert()
    
  }, []);

  return (
    <div className={`${styles.container} grid`} ref={bgAnimation}>
      <div className={`${styles.statement} col-12 col-lg-6`}>
          <h2 className='h4'>I <span>develop and design</span> <br /> engaging user experiences <br /> that brings <br/><span>emotional connection</span> through
         </h2>
      </div>
      <div className={`${styles.values} col-12 col-lg-6`}>
          <span className='h4'>Creativity,</span> 
          <br />
          <span className='h4'>Lifelong Learning,
         </span>
         <br />
         <span className='h4'>Technology Skills
         </span>
         <br />
         <span className='h4'>& Passion
         </span>
      </div>
      <div id='js-animation' className={`${styles.js_animation} col-12`}></div>
   </div> 
  )
}

export default Mission
