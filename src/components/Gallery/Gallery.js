import React from "react";

import Card from "../Card/Card";

import s from "./Gallery.module.scss";

const listCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Gallery = () => {
  return (
    <section className={s.gallery}>
      {listCards.map((i, index) => (
        <div className={s.gallery__card} key={index}>
          <Card />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
