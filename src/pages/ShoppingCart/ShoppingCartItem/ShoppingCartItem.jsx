import React from "react";
import styles from "./ShoppingCartItem.module.css";
import del from "../../../assets/icons/Vectordel.svg";
import minus from "../../../assets/icons/Vectorminus.svg";
import plus from "../../../assets/icons/Vectorplus.svg";

export default function CardItem({ id, img, title, price }) {
  let f = sessionStorage.getItem(id);
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.specifications}>
          <img alt={title} src={img}></img>
          <div>
            <span>{title}</span>
            <span id={styles.styleprice}>{price} ₽</span>
          </div>
        </div>
        <img del="delete" id={styles.delete} src={del} />
      </div>
      <div className={styles.lower}>
        <div className={styles.change}>
          <img alt={minus} src={minus}></img>
          <span> {f} </span>
          <img alt={plus} src={plus}></img>
        </div>
        <span>{price} ₽</span>
      </div>
    </div>
  );
}
