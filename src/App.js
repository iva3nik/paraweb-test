import React, { useState, useEffect } from "react";
import s from "./App.module.scss";

import * as main from "./utils/MainApi";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const [listCards, setListCard] = useState([]);

  const handleFilterByAuthor = (author) => {
    const cards = JSON.parse(localStorage.getItem("listCards"));
    if (author.trim()) {
      const list = cards.filter(
        (i) =>
          i.author && i.author.toLowerCase().includes(`${author.toLowerCase()}`)
      );
      setListCard(list);
    } else {
      setListCard(cards);
    }
  };

  const handleInputAuthor = (e) => {
    const value = e.target.value;
    handleFilterByAuthor(value);
  };

  useEffect(() => {
    main
      .getListCards()
      .then((data) => {
        setListCard(data.articles);
        localStorage.setItem("listCards", JSON.stringify(data.articles));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={s.app}>
      <Header />
      <Gallery listCards={listCards} handleInputAuthor={handleInputAuthor} />
      <Footer />
    </div>
  );
}

export default App;
