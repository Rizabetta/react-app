import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./ShoppingCart.module.css";
import { products } from "../../data/fakedb";
import ShoppingCartItem from "../ShoppingCart/ShoppingCartItem/ShoppingCartItem";

export default function ShoppingCart() {
  const [productList, setProductList] = useState([]);
  const updateProductList = () =>
    setProductList(products.filter((item) => sessionStorage.getItem(item.id)));
  useEffect(() => {
    updateProductList();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <span>Корзина</span>
      <div className={styles.basket}>
        <div>
          {productList?.map((item) => {
            return (
              <ShoppingCartItem
                updateProductList={updateProductList}
                key={item.id}
                {...item}
              />
            );
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
