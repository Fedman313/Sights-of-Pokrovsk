import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';



const Slider = () => {
    return (         
    <section className='slider'>
        <Swiper effect='fade' className='swiper my_swiper'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className='swiper-slide my_swiper-slide'>
                <div className='slider__img img-1'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Курган боевой славы</div>
                    <div className='cards__text slider-phone'>Курган боевой Славы является мемориальным комплексом регионального значения Постановлением СМ ЯАССР от 31.12.1976 г. № 84. Строительство началось силами жителей Хангаласского района 30-летию Победы в Великой Отечественной войне в 1975 г.</div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider__img img-2'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Бюст генерал-майору А.И. Притузову</div>
                    <div className='cards__text slider-phone'>27 октября 2015 года в Покровске прошла торжественная церемония открытия памятника генерал-майору Андрею Ивановичу Притузову - первому боевому генералу из Хангаласского улуса.</div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider__img img-3'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Бюст Гавриилу Васильевичу Ксенофонтову</div>
                    <div className='cards__text slider-phone'>27 апреля 2016 г. в Покровске состоялась торжественная церемония открытия бюста видного историка, этнографа и фольклориста Гавриила Васильевича Ксенофонтова.</div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider__img img-4'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Камень с отпечатками археоциатов</div>
                    <div className='cards__text slider-phone'>Данный камень представляет собой научную, познавательную и образовательную ценность доисторической природы.</div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider__img img-5'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Братская могила борцов за власть Советов</div>
                    <div className='cards__text slider-phone'>Металлическая табличка из 4 частей, на которых отлита надпись «Здесь захоронены УЧАСТНИКИ гражданской войны 1919-1922 г.г.</div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider__img img-6'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Памятник братьям Гавриилу и Павлу Ксенофонтовым</div>
                    <div className='cards__text slider-phone'>27 июня 2002 г. состоялось открытие памятника братьям Ксенофонтовым в г. Покровске, установлен на улице на территории спорт Дворца. </div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider__img img-7'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Памятник Решетниковой Зое Васильевне</div>
                    <div className='cards__text slider-phone'>4 ноября 2016 г. установлен в г. Покровске памятник Зое Решетниковой — советско-партийному работнику, члену Президиума Верховного Совета ЯАССР, депутату Верховного Совета ЯАССР двух созывов, кавалеру ордена Трудового Красного Знамени, Знака Почета, заслуженному работнику народного хозяйства РС(Я), почетному гражданину Хангаласского улуса.</div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider__img img-8'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Памятник С. Орджонидзе</div>
                    <div className='cards__text slider-phone'>Памятник С. Орджонидзе внутри двора дома, в котором в 1906 - 1908 гг. жил в ссылке Орджоникидзе Григорий Константинович.</div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider__img img-9'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Памятник Первому Учителю</div>
                    <div className='cards__text slider-phone'>19 ноября 2010 г.  состоялось открытие Памятника Первому Учителю в г. Покровск. Третий в России памятник Учителю - первому учителю из народа саха установлен в Покровске. Инициатором установления памятника является Е.М. Сидорова. Скульптор - Афанасий Романов.</div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider__img img-10'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Памятник-бюст Г.К. Орджоникидзе</div>
                    <div className='cards__text slider-phone'>В 1953 г. был установлен первый в Покровске памятник - бюст С. Орджоникидзе напротив Дома-музея С. Орджоникидзе. Скульптор - А.И. Лукин, гипс. В 1992 г. памятник был перенесен и установлен на территорию Покровской СОШ №1.</div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='slider__img img-11'>
                <div className='slider__wrapper'>
                    <div className='accent__title slider-accent-title'>Достопримечательность</div>
                    <div className='cards__title slider-title'>Стела «Павшим за установление Советской власти в Якутии 1917-2017 г.»</div>
                    <div className='cards__text slider-phone'>Памятник является символом советской эпохи.</div>
                    <div className='accent__text'>Подробнее</div>
                </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section> );
}
 
export default Slider;