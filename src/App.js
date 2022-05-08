import React, { useState, useEffect } from "react";
import s from "./App.module.scss";

import * as main from "./utils/MainApi";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import SwiperBlock from "./components/SwiperBlock/SwiperBlock";

const mockup = [
  {
    title: "asdkfjskadjfksa",
    content:
      "asdfsdkjahfkjsadhfkjhsadfkjshadkfjhaskdjfhkasdjhfklsajdhfsakdjhflsadjhf",
    author: "Nikitin Ivan",
    publishedAt: "2022-03-25T05:33:43Z",
  },
  {
    title: "asdkfjskadjfksa",
    content:
      "asdfsdkjahfkjsadhfkjhsadfkjshadkfjhaskdjfhkasdjhfklsajdhfsakdjhflsadjhf",
    author: "Smirnov Misha",
    publishedAt: "2022-04-25T05:33:43Z",
  },
  {
    title: "asdkfjskadjfksa",
    content:
      "asdfsdkjahfkjsadhfkjhsadfkjshadkfjhaskdjfhkasdjhfklsajdhfsakdjhflsadjhf",
    author: "Sasha Golubev",
    publishedAt: "2022-05-25T05:33:43Z",
  },
  {
    title: "asdkfjskadjfksa",
    content:
      "asdfsdkjahfkjsadhfkjhsadfkjshadkfjhaskdjfhkasdjhfklsajdhfsakdjhflsadjhf",
    author: "Tima Rubchenko",
    publishedAt: "2022-04-22T05:33:43Z",
  },
  {
    title: "asdkfjskadjfksa",
    content:
      "asdfsdkjahfkjsadhfkjhsadfkjshadkfjhaskdjfhkasdjhfklsajdhfsakdjhflsadjhf",
    author: "Masha Zolotoya",
    publishedAt: "2022-04-23T05:33:43Z",
  },
  {
    title: "asdkfjskadjfksa",
    content:
      "asdfsdkjahfkjsadhfkjhsadfkjshadkfjhaskdjfhkasdjhfklsajdhfsakdjhflsadjhf",
    author: "Nika Sidorenko",
    publishedAt: "2022-04-25T05:33:43Z",
  },
  {
    title: "asdkfjskadjfksa",
    content:
      "asdfsdkjahfkjsadhfkjhsadfkjshadkfjhaskdjfhkasdjhfklsajdhfsakdjhflsadjhf",
    author: "Zmud Serega",
    publishedAt: "2020-04-25T05:33:43Z",
  },
  {
    title: "asdkfjskadjfksa",
    content:
      "asdfsdkjahfkjsadhfkjhsadfkjshadkfjhaskdjfhkasdjhfklsajdhfsakdjhflsadjhf",
    author: "Nikitin Serega",
    publishedAt: "2022-04-25T05:33:43Z",
  },
  {
    title: "asdkfjskadjfksa",
    content:
      "asdfsdkjahfkjsadhfkjhsadfkjshadkfjhaskdjfhkasdjhfklsajdhfsakdjhflsadjhf",
    author: "Olesya Kuzmina",
    publishedAt: "2021-04-25T05:33:43Z",
  },
];

function App() {
  const [listCards, setListCard] = useState([]);
  const [filterAuther, setFilterAutor] = useState("");
  const [dataFrom, setDataFrom] = useState(null);
  const [dataTill, setDataTill] = useState(null);

  const handleFilterByAuthor = (author, listCards) => {
    if (author) {
      const list = listCards.filter(
        (i) =>
          i.author && i.author.toLowerCase().includes(`${author.toLowerCase()}`)
      );
      setListCard(list);
    } else {
      setListCard(listCards);
    }
  };

  const handleFilterByData = (from = null, till = null, listCards) => {
    if (from || till) {
      const list = listCards.filter(
        (i) =>
          (from ? new Date(i.publishedAt) >= new Date(from) : true) &&
          (till ? new Date(i.publishedAt) <= new Date(till) : true)
      );
      setListCard(list);
    } else {
      setListCard(listCards);
    }
  };

  const handleInputAuthor = (e) => {
    const value = e.target.value.trim();
    setFilterAutor(value);
  };

  const handleInputDataFrom = (e) => {
    const value = e.target.value;
    setDataFrom(value);
  };

  const handleInputDataTill = (e) => {
    const value = e.target.value;
    setDataTill(value);
  };

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("listCards"));

    if (dataFrom || dataTill) {
      handleFilterByData(dataFrom, dataTill, cards);
      handleFilterByAuthor(filterAuther, listCards);
    }
    handleFilterByAuthor(filterAuther, cards);
  }, [filterAuther]);

  useEffect(() => {
    let cards = JSON.parse(localStorage.getItem("listCards"));

    if (filterAuther) {
      handleFilterByAuthor(filterAuther, cards);
      handleFilterByData(dataFrom, dataTill, listCards);
    }

    handleFilterByData(dataFrom, dataTill, cards);
  }, [dataFrom, dataTill]);

  useEffect(() => {
    main
      .getListCards()
      .then((data) => {
        // setListCard(data.articles);
        // localStorage.setItem("listCards", JSON.stringify(data.articles));
        setListCard(mockup);
        localStorage.setItem("listCards", JSON.stringify(mockup));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={s.app}>
      <Header />
      <SwiperBlock />
      <Gallery
        listCards={listCards}
        handleInputAuthor={handleInputAuthor}
        handleInputDataFrom={handleInputDataFrom}
        handleInputDataTill={handleInputDataTill}
      />
      <Footer />
    </div>
  );
}

export default App;
