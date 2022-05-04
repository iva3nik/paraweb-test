import React from "react";
import { Link } from "react-router-dom";

import logo_big from "../../assets/svg/logo_big.svg";
import telegram from "../../assets/svg/icon_telegram.svg";
import vk from "../../assets/svg/icon_vk.svg";
import twitter from "../../assets/svg/icon_twitter.svg";
import h from "../../assets/svg/icon_h.svg";

import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__logoColumn}>
        <img className={s.footer__logo} src={logo_big} alt="Logo" />
        <p>© ООО «Лого», 2008—2022</p>
      </div>
      <div className={s.footer__column}>
        <div className={s.footer__links}>
          <Link className={s.footer__link} to="#">
            Решения
          </Link>
          <Link className={s.footer__link} to="#">
            Оборудование
          </Link>
          <Link className={s.footer__link} to="#">
            О компании
          </Link>
          <Link className={s.footer__link} to="#">
            Блог
          </Link>
        </div>
        <div className={s.footer__list}>
          <a
            href="#"
            className={s.footer__item}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="Telegram icon" />
          </a>
          <a
            href="#"
            className={s.footer__item}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vk} alt="Vk icon" />
          </a>
          <a
            href="#"
            className={s.footer__item}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter icon" />
          </a>
          <a
            href="#"
            className={s.footer__item}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={h} alt="H icon" />
          </a>
        </div>
      </div>
      <div className={s.footer__shortInfo}>
        <p>© ООО «Лого», 2008—2022</p>
        <p>Лицензия на телематические услуги № 176267</p>
      </div>
    </footer>
  );
};

export default Footer;
