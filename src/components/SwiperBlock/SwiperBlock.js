import React from "react";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import background_1 from "../../assets/images/background_1.png";

import s from "./SwiperBlock.module.scss";

const SwiperBlock = () => {
  return (
    <div className={s.swiper}>
      <Swiper
        modules={[Pagination, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img className={s.swiper__image} src={background_1} alt="back" />
          <div className={s.swiper__content}>
            <h2 className={s.swiper__title}>IT-инфраструктура для бизнеса</h2>
            <p className={s.swiper__text}>
              Мы предлагаем комплексные решения для всех уровней бизнеса: от
              индивидуальных предпринимателей до крупных международных компаний.
              Более 20 000 клиентов по всему миру доверяют нам.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper__image} src={background_1} alt="back" />
          <div className={s.swiper__content}>
            <h2 className={s.swiper__title}>Здесь мог бы быть ваш заголовок</h2>
            <p className={s.swiper__text}>А здесь описание вашей рекламы)</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.swiper__image} src={background_1} alt="back" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBlock;
