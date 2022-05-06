import React, { useState, useEffect } from "react";
import s from "./App.module.scss";

import * as main from "./utils/MainApi";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const [listCards, setListCard] = useState([]);

  useEffect(() => {
    main
      .getListCards()
      .then((data) => setListCard(data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={s.app}>
      <Header />
      <Gallery listCards={listCards} />
      <Footer />
    </div>
  );
}

export default App;
