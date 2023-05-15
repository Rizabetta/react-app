import React from "react";
import styles from "./CardItem.module.css";
import { createElement } from "react";

export default function CardItem({ id, img, title, price, rate }) {
  function handleClick() {
    let count = 0;
    if (sessionStorage.getItem(id) == null) {
      sessionStorage.setItem(id, 1);
    } else {
      count = Number(sessionStorage.getItem(id)) + 1;
      sessionStorage.setItem(id, count);
      count = 0;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img alt={title} src={img}></img>
      </div>
      <div className={styles.description}>
        <div className={styles.left}>
          <span>{title}</span>
          <span>
            <span style={{ color: "#FFCE7F" }}>★ </span>
            {rate}
          </span>
        </div>
        <div className={styles.right}>
          <span>{price} ₽</span>
          <button onClick={handleClick}>Купить</button>
        </div>
      </div>
    </div>
  );
}
