import React from "react";

import user from "../../assets/svg/user_small.svg";

import Card from "../Card/Card";

import s from "./Gallery.module.scss";

const listCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Gallery = () => {
  return (
    <section className={s.gallery}>
      <div className={s.gallery__inputs}>
        <div className={s.gallery__author}>
          <input
            className={s.gallery__input}
            name="author"
            type="text"
            placeholder="Выберите автора"
          />
          <img src={user} alt="user icon" />
        </div>
        <div className={s.gallery__bigInput}>
          <input
            className={s.gallery__dataInput}
            name="from"
            type="date"
            placeholder="От"
          />
          <input
            className={s.gallery__dataInput}
            name="till"
            type="date"
            placeholder="~ До"
          />
        </div>
      </div>
      <div className={s.gallery__container}>
        {listCards.map((i, index) => (
          <Card key={index} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
