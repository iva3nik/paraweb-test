import React from "react";

import user from "../../assets/svg/user_small.svg";

import Card from "../Card/Card";

import s from "./Gallery.module.scss";

const Gallery = ({
  listCards,
  handleInputAuthor,
  handleInputDataFrom,
  handleInputDataTill,
}) => {
  return (
    <section className={s.gallery}>
      <div className={s.gallery__inputs}>
        <div className={s.gallery__author}>
          <input
            className={s.gallery__input}
            name="author"
            type="text"
            placeholder="Выберите автора"
            onChange={handleInputAuthor}
          />
          <img src={user} alt="user icon" />
        </div>
        <div className={s.gallery__bigInput}>
          <input
            className={s.gallery__dataInput}
            name="from"
            type="date"
            placeholder="От"
            onChange={handleInputDataFrom}
          />
          <input
            className={s.gallery__dataInput}
            name="till"
            type="date"
            placeholder="~ До"
            onChange={handleInputDataTill}
          />
        </div>
      </div>
      <div className={s.gallery__container}>
        {listCards &&
          listCards.map((card, index) => <Card key={index} card={card} />)}
      </div>
    </section>
  );
};

export default Gallery;
