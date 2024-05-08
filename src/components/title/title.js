import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from 'react';




const Title = () => {
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
      gsap.to('.title__btn-wrapper', {
        delay: 2,
        y: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
      })
      gsap.to('.accent__title', {
        delay: 1,
        y: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
      })
      gsap.to('.title-1', {
        delay: .5,
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
      })
      gsap.to('.title-2', {
        delay: .6,
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
      });
  }, []);
    return ( 
        <section id='title' className='title__section'>
            <div className='accent__title'>
            республика саха (якутия)
            </div>
            <div className='title-1'>
            <h1 className='title-2'>Покровск</h1>Хангаласский улус
            </div>
            <div className='title__btn-wrapper'>
            <a className='title__btn' href='#about'>
            Scroll down
            </a>
            </div>
        </section>
     );
}
 
export default Title;