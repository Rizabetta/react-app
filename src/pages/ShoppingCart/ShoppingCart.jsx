import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./ShoppingCart.module.css";
import { products } from "../../data/fakedb";
import ShoppingCartItem from "../ShoppingCart/ShoppingCartItem/ShoppingCartItem";

export default function ShoppingCart() {
  return (
    <div className={styles.container}>
      <Header />
      <span>Корзина</span>
      <div className={styles.basket}>
        <div>
          {products.map((item) => {
            if (sessionStorage.getItem(item.id) !== null)
              return <ShoppingCartItem key={item.id} {...item} />;
          })}
        </div>

        <div className={styles.finalprice}>
          <div className={styles.price}>
            <span>ИТОГО</span>
            <span>₽ 0</span>
          </div>
          <button>Перейти к оформлению</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
