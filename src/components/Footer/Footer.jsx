import React from "react";
import vk from "../../assets/icons/VK.svg";
import tg from "../../assets/icons/Telegramtg.svg";
import wapp from "../../assets/icons/Whatsappvapp.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <h3>QPICK</h3>
      <div className={styles.linklist}>
        <ul>
          <li>
            <a>Избранное</a>
          </li>
          <li>
            <a>Корзина</a>
          </li>
          <li>
            <a>Контакты</a>
          </li>
        </ul>
      </div>
      <div>
        <span>
          <a>Условия сервиса</a>
        </span>
        <div className={styles.language}>
          <span className={styles.language_active}>Рус</span>
          <span>Eng</span>
        </div>
      </div>
      <div className={styles.social}>
        <img alt="VK" src={vk} />
        <img alt="tg" src={tg} />
        <img alt="wapp" src={wapp} />
      </div>
    </div>
  );
}
