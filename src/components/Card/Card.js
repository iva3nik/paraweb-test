import React from "react";

import s from "./Card.module.scss";

const Card = ({ card }) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const getDate = (str) => {
    const date = new Date(str);
    return date.toLocaleString("ru", options);
  };

  return (
    <div className={s.card}>
      <h2 className={s.card__header}>{card.title}</h2>
      <div className={s.card__info}>
        <p className={s.card__text}>{card.content}</p>
        <div className={s.card__line}>
          <p className={s.card__author}>
            {card.author ? card.author : "Unknown"}
          </p>
          <p className={s.card__data}>{getDate(card.publishedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
