import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from 'react';


const About = () => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
      gsap.to(".about__img", {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".about__img",
          start: "top center",
          end: "bottom",
        }
      }); 
      gsap.to(".about__text", {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".about__img",
          start: "top center",
          end: "bottom",
        }
      });
  }, []);
    return (         
    <section id='about' className='about'>
        <article className='about__img animation'></article>
        <article className='about__text animation-1'>
        <div className='accent__title'>
            О Покровске
        </div>
        <div className='cards__title'>
            Что вы знаете о Покровске?
        </div>
        <div className='cards__text'>
            Основан в 1682 году казаками как укрепление 
            Караульный мыс, где была открыта 
            Покровская пустынь, принадлежавшая 
            Якутскому монастырю. В 1720-х годах преобразована в самостоятельный монастырь, 
            позже село Покровское, с 1941 года рабочий посёлок Покровск[3], 
            в 1997 году получил статус города.
        </div>
        <div className='accent__text' typeof='button' onclick="window.location('https://google.com')">
            <a className='accent__text' href='https://google.com'>Подробнее</a>
        </div>
        </article>
    </section> );
}
 
export default About;