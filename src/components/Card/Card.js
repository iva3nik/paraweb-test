import React from "react";

import s from "./Card.module.scss";

const Card = () => {
  return (
    <div className={s.card}>
      <h2 className={s.card__header}>Заголовок карточки</h2>
      <div className={s.card__info}>
        <p className={s.card__text}>
          Задайте любой вопрос о продукте, его настройках, трудностях в работе
          или неполадках. Поддержка работает 24/7, специалисты ответят в течение
          15 минут и помогут со всем разобраться.
        </p>
        <div className={s.card__line}>
          <p className={s.card__author}>Василий Пупкин</p>
          <p className={s.card__data}>24 февраля 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
