import { products } from "../../data/fakedb";
import CardItem from "./CardItem/CardItem";
import styles from "./CardList.module.css";

export default function CardList() {
  return (
    <>
      <div className={styles.container}>
        {products.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}
