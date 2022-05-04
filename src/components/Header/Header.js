import React from "react";

import logo from "../../assets/svg/logo.svg";

import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.header__logo} src={logo} alt="Logo" />
      <div className={s.header__info}>
        <p className={s.header__text}>8 800 000 00 00</p>
        <p className={s.header__text}>sales@logo.ru</p>
      </div>
    </header>
  );
};

export default Header;
