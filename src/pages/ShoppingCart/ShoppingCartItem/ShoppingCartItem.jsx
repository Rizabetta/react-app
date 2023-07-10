import { useEffect, useState } from "react";
import styles from "./ShoppingCartItem.module.css";
import del from "../../../assets/icons/Vectordel.svg";
import minus from "../../../assets/icons/Vectorminus.svg";
import plus from "../../../assets/icons/Vectorplus.svg";

export default function CardItem({
  id,
  img,
  title,
  price,
  updateProductList,
  updateFinalPrice,
}) {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(+sessionStorage.getItem(id));
  };
  useEffect(() => {
    updateCount();
  }, []);
  const handleInc = () => {
    sessionStorage.setItem(id, count + 1);
    updateCount();
    updateFinalPrice();
  };
  const handleDec = () => {
    if (+sessionStorage.getItem(id) > 1) {
      sessionStorage.setItem(id, count - 1);
    } else {
      sessionStorage.removeItem(id);
      updateProductList();
    }
    updateCount();
    updateFinalPrice();
  };
  const handleRemove = () => {
    sessionStorage.removeItem(id);
    updateProductList();
    updateFinalPrice();
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.specifications}>
            <img alt={title} src={img}></img>
            <div>
              <span>{title}</span>
              <span id={styles.styleprice}>{price} ₽</span>
            </div>
          </div>
          <img del="delete" onClick={handleRemove} id={styles.delete} src={del} />
        </div>
        <div className={styles.lower}>
          <div className={styles.change}>
            <img onClick={handleDec} alt={minus} src={minus}></img>
            <span> {count} </span>
            <img onClick={handleInc} alt={plus} src={plus}></img>
          </div>
          <span>{price} ₽</span>
        </div>
      </div>
    </>
  );
}
