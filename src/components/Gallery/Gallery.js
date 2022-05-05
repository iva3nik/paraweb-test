import React from "react";

import Card from "../Card/Card";

import s from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <section className={s.gallery}>
      <Card />
    </section>
  );
};

export default Gallery;
