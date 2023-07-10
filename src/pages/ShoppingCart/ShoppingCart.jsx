import { useEffect, useState } from "react";
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
  const [finalPrice, setFinalPrice] = useState(0);
  function updateFinalPrice() {
    let a = 0;
    products.filter((item) => {
      if (sessionStorage.getItem(item.id) !== null) {
        a += item.price * sessionStorage.getItem(item.id);
        console.log(Intl.NumberFormat('ru-RU',{
          style: 'currency',
          currency: 'RUB',
        }).format(a));
      }
    });
    setFinalPrice(a);
  }
  useEffect(() => {
    updateFinalPrice();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <Header />
        <span>Корзина</span>
        <div className={styles.basket}>
          <div>
            {productList?.map((item) => {
              return (
                <ShoppingCartItem
                  updateProductList={updateProductList}
                  updateFinalPrice={updateFinalPrice}
                  key={item.id}
                  {...item}
                />
              );
            })}
          </div>
          <div className={styles.finalprice}>
            <div className={styles.price}>
              <span>ИТОГО</span>
              {/* <span>
                {productList?.map((item) => {
                  return (
                    <span key={item.id} updateFinalPrice={updateFinalPrice}>
                      {finalPrice}
                    </span>
                  );
                })}
              </span> */}
              <span>{finalPrice}</span>
            </div>
            <button>Перейти к оформлению</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
