import React from "react";

import logo from "../../assets/svg/logo.svg";
import phone from "../../assets/svg/phone.svg";
import envelop from "../../assets/svg/envelop.svg";

import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.header__logo} src={logo} alt="Logo" />
      <div className={s.header__info}>
        <p className={s.header__text}>8 800 000 00 00</p>
        <p className={s.header__text}>sales@logo.ru</p>
        <img className={s.header__icon} src={phone} alt="Phone icon" />
        <img className={s.header__icon} src={envelop} alt="Envelop icon" />
      </div>
    </header>
  );
};

export default Header;
