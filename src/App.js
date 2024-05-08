import main from './scss/main.scss';
import facebook from './img/socials/facebook.svg';
import instagram from './img/socials/instagram.svg';

//components 
import Header from "./components/header/header"
import Title from "./components/title/title"
import About from "./components/about/about"
import Slider from "./components/slider/slider"
import Footer from "./components/footer/footer"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react';



function App() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    // const elements = document.querySelectorAll('.sught__text');
    // elements.forEach((elemnt, index) => {
    //   if(index % 2 == 0) {
    //     gsap.from('.sight__text', {
    //       scrollTrigger: {
    //         trigger: '.sight__text',
    //         start: 'top center',
    //         end: 'bottom',
    //       },
    //       opacity: 1,
    //       x: 200,
    //       duration: 1.5,
    //     }) 
    //   } else {
    //       gsap.from('.sight__text', {
    //         scrollTrigger: {
    //           trigger: '.sight__text',
    //           start: 'top center',
    //           end: 'bottom',
    //         },
    //       opacity: 1,
    //       x: -200,
    //       duration: 1.5,
    //     }) 
    //   }
    // })
    gsap.to('.anim-1', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-1',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.anim-2', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-2',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.anim-3', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-3',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.anim-4', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-4',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.anim-5', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-5',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.anim-6', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-6',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.anim-7', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-7',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.anim-8', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-8',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.anim-9', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-9',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.anim-10', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-10',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.anim-11', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.anim-11',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-1', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-1',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-2', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-2',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-3', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-3',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-4', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-4',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-5', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-5',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-6', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-6',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-7', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-7',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-8', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-8',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-9', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-9',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-10', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-10',
        start: 'top center',
        end: 'bottom',
      }
    });
    gsap.to('.sight__img-11', {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.sight__img-11',
        start: 'top center',
        end: 'bottom',
      }
    });
  }, []);
  return (
    <div className="App">
      <div className='bg'></div>
      <div className='container'>
        <div className='socials'>
        <h1>Follow us</h1>
        <img src={facebook}/>
        <img src={instagram}/>
        </div>
        <Header/>
        <Title/>
        <About/>
        <Slider/>
        <section id='sight' className='sight'>
          <article className='sight__text anim-1'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Курган боевой славы
            </div>
            <div className='cards__text'>
            Курган боевой Славы является мемориальным комплексом регионального значения Постановлением СМ ЯАССР от 31.12.1976 г. № 84. Строительство началось силами жителей Хангаласского района 30-летию Победы в Великой Отечественной войне в 1975 г.
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>            
          <article className='sight__img-1'></article>
        </section>
        <section id='' className='sight'>
          <article className='sight__img-2'></article>
          <article className='sight__text anim-2'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Бюст генерал-майору А.И. Притузову
            </div>
            <div className='cards__text'>
            27 октября 2015 года в Покровске прошла торжественная церемония открытия памятника генерал-майору Андрею Ивановичу Притузову - первому боевому генералу из Хангаласского улуса.
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>
        </section>
        <section id='' className='sight'>
          <article className='sight__text anim-3'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Бюст Гавриилу Васильевичу Ксенофонтову
            </div>
            <div className='cards__text'>
            27 апреля 2016 г. в Покровске состоялась торжественная церемония открытия бюста видного историка, этнографа и фольклориста Гавриила Васильевича Ксенофонтова.
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>            
          <article className='sight__img-3 sight__img'></article>
        </section>
        <section id='' className='sight'>
          <article className='sight__img-4 sight__img'></article>
          <article className='sight__text anim-4'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Камень с отпечатками археоциатов
            </div>
            <div className='cards__text'>
            Данный камень представляет собой научную, познавательную и образовательную ценность доисторической природы.
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>
        </section>
        <section id='' className='sight'>
          <article className='sight__text anim-5 sight__img'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Братская могила борцов за власть Советов
            </div>
            <div className='cards__text'>
            Металлическая табличка из 4 частей, на которых отлита надпись «Здесь захоронены УЧАСТНИКИ гражданской войны 1919-1922 г.г.
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>            
          <article className='sight__img-5'></article>
        </section>
        <section id='' className='sight'>
          <article className='sight__img-6 sight__img'></article>
          <article className='sight__text anim-6'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Памятник братьям Гавриилу и Павлу Ксенофонтовым
            </div>
            <div className='cards__text'>
            27 июня 2002 г. состоялось открытие памятника братьям Ксенофонтовым в г. Покровске, установлен на улице на территории спорт Дворца. 
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>
        </section>
        <section id='' className='sight'>
          <article className='sight__text anim-7'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Памятник Решетниковой Зое Васильевне
            </div>
            <div className='cards__text'>
            4 ноября 2016 г. установлен в г. Покровске памятник Зое Решетниковой — советско-партийному работнику, члену Президиума Верховного Совета ЯАССР, депутату Верховного Совета ЯАССР двух созывов, кавалеру ордена Трудового Красного Знамени, Знака Почета, заслуженному работнику народного хозяйства РС(Я), почетному гражданину Хангаласского улуса.
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>            
          <article className='sight__img-7 sight__img'></article>
        </section>
        <section id='' className='sight'>
          <article className='sight__img-8 sight__img'></article>
          <article className='sight__text anim-8'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Памятник С. Орджонидзе
            </div>
            <div className='cards__text'>
            Памятник С. Орджонидзе внутри двора дома, в котором в 1906 - 1908 гг. жил в ссылке Орджоникидзе Григорий Константинович.
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>
        </section>
        <section id='' className='sight'>
          <article className='sight__text anim-9'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Памятник Первому Учителю
            </div>
            <div className='cards__text'>
            19 ноября 2010 г.  состоялось открытие Памятника Первому Учителю в г. Покровск. Третий в России памятник Учителю - первому учителю из народа саха установлен в Покровске. Инициатором установления памятника является Е.М. Сидорова. Скульптор - Афанасий Романов.
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>            
          <article className='sight__img-9 sight__img'></article>
        </section>
        <section id='' className='sight'>
          <article className='sight__img-10 sight__img'></article>
          <article className='sight__text anim-10'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Памятник-бюст Г.К. Орджоникидзе
            </div>
            <div className='cards__text'>
            В 1953 г. был установлен первый в Покровске памятник - бюст С. Орджоникидзе напротив Дома-музея С. Орджоникидзе. Скульптор - А.И. Лукин, гипс. В 1992 г. памятник был перенесен и установлен на территорию Покровской СОШ №1.
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>
        </section>
        <section id='' className='sight'>
          <article className='sight__text anim-11'>
            <div className='accent__title'>
              Достопримечательность
            </div>
            <div className='cards__title'>
            Стела «Павшим за установление Советской власти в Якутии 1917-2017 г.»
            </div>
            <div className='cards__text'>
            Памятник является символом советской эпохи.
            </div>
            <div className='accent__text'>
              Подробнее
            </div>
          </article>            
          <article className='sight__img-11 sight__img'></article>
        </section>
        <Footer/>
      </div>
      <div className='footer__bg'></div>
    </div>
  );
}

export default App;
