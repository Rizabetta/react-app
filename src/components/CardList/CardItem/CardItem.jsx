import React from "react";
import styles from "./CardItem.module.css";

export default function CardItem({ id, img, title, price, rate }) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img alt={title} src={img}></img>
      </div>
      <div className={styles.description}>
        <div className={styles.left}>
          <span>{title}</span>
          <span>
            <span style={{ color: "#FFCE7F" }}>★</span>
            {rate}
          </span>
        </div>
        <div className={styles.right}>
          <span>{price} ₽</span>
          <button>Купить</button>
        </div>
      </div>
    </div>
  );
}
